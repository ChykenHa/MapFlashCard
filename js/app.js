/**
 * ỨNG DỤNG ĐỊA LÝ SỐ & BẢN ĐỒ 34 TỈNH THÀNH VIỆT NAM (NQ 202/2025/QH15)
 * Logic điều khiển: Flashcard Spaced Repetition, Bản đồ SVG, Minigame Đấu trường, Trắc nghiệm
 */

(function () {
  "use strict";

  // =========================================================================
  // 1. STATE & LOCAL STORAGE (Mặc định: Bảng màu Deep Indigo)
  // =========================================================================
  let initialMode = localStorage.getItem("app_mode") || "light";

  const state = {
    theme: "indigo",
    mode: initialMode,
    soundEnabled: localStorage.getItem("app_sound") !== "false",
    masteredIds: new Set(JSON.parse(localStorage.getItem("app_mastered_ids") || "[]")),
    activeTab: "tab-flashcard",

    // Flashcard State
    deck: [...window.PROVINCES_DATA],
    cardIndex: 0,
    isCardFlipped: false,

    // Map State
    selectedProvinceId: null,
    zoomLevel: 1,
    viewBox: { x: 150, y: 0, w: 650, h: 1020 },
    mapMode: "svg", // "svg" hoặc "gmap"
    gmapType: "k",  // "k" (vệ tinh), "m" (giao thông), "p" (địa hình)

    // Challenge Game State
    challengeTarget: null,
    challengeScore: 0,
    challengeStreak: 0,
    challengePool: [...window.PROVINCES_DATA],

    // Quiz State (Ngân hàng 120+ câu, random 10-15 câu/set)
    quizSetSize: 15,
    quizCategory: "all",
    quizActiveSet: [],
    quizIndex: 0,
    quizScore: 0,
    quizCorrectCount: 0,
    quizAnswered: false
  };

  // =========================================================================
  // 2. AUDIO SYNTHESIZER (WEB AUDIO API)
  // =========================================================================
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx && typeof window.AudioContext !== "undefined") {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  }

  function playTone(freq, duration = 0.1, type = "sine") {
    if (!state.soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio fallback silent
    }
  }

  const sound = {
    flip: () => playTone(320, 0.08, "triangle"),
    click: () => playTone(440, 0.05, "sine"),
    success: () => {
      playTone(523.25, 0.1, "sine");
      setTimeout(() => playTone(659.25, 0.12, "sine"), 100);
      setTimeout(() => playTone(783.99, 0.18, "sine"), 200);
    },
    error: () => {
      playTone(260, 0.12, "sawtooth");
      setTimeout(() => playTone(220, 0.18, "sawtooth"), 120);
    }
  };

  // =========================================================================
  // 3. THEME & DISPLAY ENGINE
  // =========================================================================
  const htmlEl = document.documentElement;
  const modeToggleBtn = document.getElementById("modeToggleBtn");
  const modeText = document.getElementById("modeText");
  const soundToggleBtn = document.getElementById("soundToggleBtn");

  function applyThemeAndMode() {
    htmlEl.setAttribute("data-theme", "indigo");
    htmlEl.setAttribute("data-mode", state.mode);

    if (modeText) {
      modeText.textContent = state.mode === "dark" ? "Giao diện: Tối" : "Giao diện: Sáng";
    }
    const soundText = document.getElementById("soundText");
    if (soundText) {
      soundText.textContent = state.soundEnabled ? "Âm thanh: Bật" : "Âm thanh: Tắt";
    }
  }

  modeToggleBtn.addEventListener("click", () => {
    state.mode = state.mode === "dark" ? "light" : "dark";
    localStorage.setItem("app_mode", state.mode);
    applyThemeAndMode();
    sound.click();
  });

  soundToggleBtn.addEventListener("click", () => {
    state.soundEnabled = !state.soundEnabled;
    localStorage.setItem("app_sound", state.soundEnabled);
    const soundText = document.getElementById("soundText");
    if (soundText) {
      soundText.textContent = state.soundEnabled ? "Âm thanh: Bật" : "Âm thanh: Tắt";
    }
    if (state.soundEnabled) sound.click();
  });

  // =========================================================================
  // 4. TOAST NOTIFICATION
  // =========================================================================
  const toastNotice = document.getElementById("toastNotice");
  const toastMsg = document.getElementById("toastMsg");
  let toastTimer = null;

  function showToast(message) {
    toastMsg.textContent = message;
    toastNotice.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotice.classList.remove("show");
    }, 2400);
  }

  // =========================================================================
  // 5. TABS NAVIGATION
  // =========================================================================
  const navTabBtns = document.querySelectorAll(".nav-tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  function switchTab(tabId) {
    state.activeTab = tabId;
    navTabBtns.forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
    });
    tabPanes.forEach(pane => {
      pane.classList.toggle("active", pane.id === tabId);
    });
    sound.click();

    // Trigger tab-specific initializers
    if (tabId === "tab-challenge" && !state.challengeTarget) {
      initChallenge();
    }
  }

  navTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // =========================================================================
  // 6. MODULE 1: FLASHCARD DECK LOGIC
  // =========================================================================
  const flashcardElement = document.getElementById("flashcardElement");
  const frontBadgeType = document.getElementById("frontBadgeType");
  const frontRegion = document.getElementById("frontRegion");
  const frontIndex = document.getElementById("frontIndex");
  const frontName = document.getElementById("frontName");
  const frontStatusPill = document.getElementById("frontStatusPill");

  const backName = document.getElementById("backName");
  const backTypeBadge = document.getElementById("backTypeBadge");
  const backCapital = document.getElementById("backCapital");
  const backAreaPop = document.getElementById("backAreaPop");
  const backFormerList = document.getElementById("backFormerList");
  const backMnemonic = document.getElementById("backMnemonic");
  const backHighlights = document.getElementById("backHighlights");

  const currentCardIndexText = document.getElementById("currentCardIndexText");
  const totalCardsText = document.getElementById("totalCardsText");
  const deckPercentText = document.getElementById("deckPercentText");
  const deckProgressFill = document.getElementById("deckProgressFill");
  const userMasteredCount = document.getElementById("userMasteredCount");

  const cardRegionFilter = document.getElementById("cardRegionFilter");
  const cardTypeFilter = document.getElementById("cardTypeFilter");
  const btnPrevCard = document.getElementById("btnPrevCard");
  const btnNextCard = document.getElementById("btnNextCard");
  const btnReviewLater = document.getElementById("btnReviewLater");
  const btnMasterCard = document.getElementById("btnMasterCard");
  const btnShuffleDeck = document.getElementById("btnShuffleDeck");
  const btnResetProgress = document.getElementById("btnResetProgress");

  function filterDeck() {
    const regionVal = cardRegionFilter.value;
    const typeVal = cardTypeFilter.value;

    let filtered = window.PROVINCES_DATA.filter(item => {
      const matchRegion = regionVal === "all" || item.region === regionVal;
      let matchType = true;
      if (typeVal === "city") matchType = item.type.includes("Thành phố");
      else if (typeVal === "merged") matchType = item.isMerged && !item.type.includes("Thành phố");
      else if (typeVal === "original") matchType = !item.isMerged;
      return matchRegion && matchType;
    });

    state.deck = filtered.length > 0 ? filtered : [...window.PROVINCES_DATA];
    state.cardIndex = 0;
    renderCurrentCard();
  }

  function renderCurrentCard() {
    if (!state.deck.length) return;
    const item = state.deck[state.cardIndex];

    // Reset Flip state
    state.isCardFlipped = false;
    flashcardElement.classList.remove("flipped");

    // Front details
    frontBadgeType.textContent = item.type.toUpperCase();
    frontRegion.textContent = item.region;
    frontIndex.textContent = `ĐƠN VỊ #${String(state.cardIndex + 1).padStart(2, "0")}`;
    frontName.textContent = item.name;
    frontStatusPill.textContent = item.isMerged
      ? `Hợp nhất từ ${item.mergedFrom.length} địa phương`
      : "Giữ nguyên trạng địa giới";

    // Back details
    backName.textContent = item.name;
    backTypeBadge.textContent = item.type;
    backCapital.textContent = item.capital;
    backAreaPop.textContent = `${item.areaKm2.toLocaleString("vi-VN")} km² • ${item.population}`;
    backMnemonic.textContent = item.mnemonic ? `"${item.mnemonic}"` : "";
    backHighlights.textContent = item.highlights;

    // Former pills
    backFormerList.innerHTML = "";
    item.mergedFrom.forEach(f => {
      const pill = document.createElement("span");
      pill.className = "former-pill";
      pill.textContent = f;
      backFormerList.appendChild(pill);
    });

    // Metas & Progress
    currentCardIndexText.textContent = state.cardIndex + 1;
    totalCardsText.textContent = state.deck.length;

    updateMasteryStats();
  }

  function updateMasteryStats() {
    const mastered = state.masteredIds.size;
    const total = window.PROVINCES_DATA.length;
    const pct = Math.round((mastered / total) * 100);

    userMasteredCount.textContent = `${mastered} / ${total}`;
    deckPercentText.textContent = `${pct}% Đã Thuộc`;
    deckProgressFill.style.width = `${pct}%`;
  }

  function flipCard() {
    state.isCardFlipped = !state.isCardFlipped;
    flashcardElement.classList.toggle("flipped", state.isCardFlipped);
    sound.flip();
  }

  flashcardElement.addEventListener("click", flipCard);

  btnNextCard.addEventListener("click", () => {
    state.cardIndex = (state.cardIndex + 1) % state.deck.length;
    renderCurrentCard();
    sound.click();
  });

  btnPrevCard.addEventListener("click", () => {
    state.cardIndex = (state.cardIndex - 1 + state.deck.length) % state.deck.length;
    renderCurrentCard();
    sound.click();
  });

  btnMasterCard.addEventListener("click", () => {
    const item = state.deck[state.cardIndex];
    state.masteredIds.add(item.id);
    localStorage.setItem("app_mastered_ids", JSON.stringify([...state.masteredIds]));
    sound.success();
    showToast(`Đã ghi nhớ: ${item.name} (${item.type})`);
    state.cardIndex = (state.cardIndex + 1) % state.deck.length;
    renderCurrentCard();
  });

  btnReviewLater.addEventListener("click", () => {
    const item = state.deck[state.cardIndex];
    state.masteredIds.delete(item.id);
    localStorage.setItem("app_mastered_ids", JSON.stringify([...state.masteredIds]));
    sound.click();
    showToast(`Đã thêm vào danh sách cần ôn: ${item.name}`);
    state.cardIndex = (state.cardIndex + 1) % state.deck.length;
    renderCurrentCard();
  });

  btnShuffleDeck.addEventListener("click", () => {
    // Fisher-Yates shuffle
    for (let i = state.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [state.deck[i], state.deck[j]] = [state.deck[j], state.deck[i]];
    }
    state.cardIndex = 0;
    renderCurrentCard();
    sound.flip();
    showToast("Đã xáo trộn ngẫu nhiên các thẻ!");
  });

  btnResetProgress.addEventListener("click", () => {
    if (confirm("Bạn có muốn đặt lại toàn bộ tiến độ đã ghi nhớ không?")) {
      state.masteredIds.clear();
      localStorage.removeItem("app_mastered_ids");
      updateMasteryStats();
      showToast("Đã đặt lại tiến độ!");
    }
  });

  cardRegionFilter.addEventListener("change", filterDeck);
  cardTypeFilter.addEventListener("change", filterDeck);

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (["INPUT", "SELECT", "TEXTAREA"].includes(e.target.tagName)) return;
    if (e.code === "Space") {
      e.preventDefault();
      flipCard();
    } else if (e.code === "ArrowRight") {
      e.preventDefault();
      btnNextCard.click();
    } else if (e.code === "ArrowLeft") {
      e.preventDefault();
      btnPrevCard.click();
    } else if (e.key === "1") {
      btnReviewLater.click();
    } else if (e.key === "2") {
      btnMasterCard.click();
    }
  });

  // =========================================================================
  // 7. MODULE 2: INTERACTIVE SVG MAP & GOOGLE MAPS LAYER
  // =========================================================================
  const mapProvincesGroup = document.getElementById("mapProvincesGroup");
  const mapIslandsGroup = document.getElementById("mapIslandsGroup");
  const mapTooltip = document.getElementById("mapTooltip");
  const vietnamSvgMap = document.getElementById("vietnamSvgMap");
  const svgMapContainer = document.getElementById("svgMapContainer");

  // Google Maps Layer Elements
  const btnModeSvgMap = document.getElementById("btnModeSvgMap");
  const btnModeGMap = document.getElementById("btnModeGMap");
  const gmapControlsRow = document.getElementById("gmapControlsRow");
  const gmapProvinceSelect = document.getElementById("gmapProvinceSelect");
  const btnGMapTypeSat = document.getElementById("btnGMapTypeSat");
  const btnGMapTypeRoad = document.getElementById("btnGMapTypeRoad");
  const btnGMapTypeTerrain = document.getElementById("btnGMapTypeTerrain");
  const btnGMapExternal = document.getElementById("btnGMapExternal");
  const googleMapsContainer = document.getElementById("googleMapsContainer");
  const googleMapsIframe = document.getElementById("googleMapsIframe");
  const svgMapTools = document.getElementById("svgMapTools");
  const mapTitleText = document.getElementById("mapTitleText");
  const mapSubtitleText = document.getElementById("mapSubtitleText");

  // Inspector Elements
  const inspectorPlaceholder = document.getElementById("inspectorPlaceholder");
  const inspectorActive = document.getElementById("inspectorActive");
  const insType = document.getElementById("insType");
  const insRegion = document.getElementById("insRegion");
  const insName = document.getElementById("insName");
  const insStatus = document.getElementById("insStatus");
  const insCapital = document.getElementById("insCapital");
  const insGps = document.getElementById("insGps");
  const insArea = document.getElementById("insArea");
  const insPopulation = document.getElementById("insPopulation");
  const insFormerList = document.getElementById("insFormerList");
  const insMnemonic = document.getElementById("insMnemonic");
  const insHighlights = document.getElementById("insHighlights");
  const btnOpenInFlashcard = document.getElementById("btnOpenInFlashcard");
  const btnViewOnGoogleMaps = document.getElementById("btnViewOnGoogleMaps");

  function updateGoogleMapFrame(lat, lng, zoom = 10) {
    if (!googleMapsIframe) return;
    const url = `https://maps.google.com/maps?q=${lat},${lng}&t=${state.gmapType}&z=${zoom}&output=embed`;
    googleMapsIframe.src = url;
    if (btnGMapExternal) {
      btnGMapExternal.href = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}`;
    }
  }

  function setMapMode(mode) {
    state.mapMode = mode;
    if (mode === "gmap") {
      if (btnModeSvgMap) {
        btnModeSvgMap.classList.remove("active");
        btnModeSvgMap.style.background = "";
        btnModeSvgMap.style.color = "";
      }
      if (btnModeGMap) {
        btnModeGMap.classList.add("active");
        btnModeGMap.style.background = "var(--mono-accent)";
        btnModeGMap.style.color = "var(--mono-accent-invert)";
      }
      if (svgMapContainer) svgMapContainer.style.display = "none";
      if (googleMapsContainer) googleMapsContainer.style.display = "block";
      if (svgMapTools) svgMapTools.style.display = "none";
      if (gmapControlsRow) gmapControlsRow.style.display = "flex";

      if (mapTitleText) mapTitleText.textContent = "Google Maps Vệ Tinh (GPS Thực Địa 34 Tỉnh Thành)";
      if (mapSubtitleText) mapSubtitleText.textContent = "Khám phá địa hình, hải đảo & không gian đô thị thực tế từ ảnh vệ tinh Google Maps";

      // Fly to selected province or center Vietnam
      if (state.selectedProvinceId) {
        const prov = window.PROVINCES_DATA.find(p => p.id === state.selectedProvinceId);
        if (prov && prov.gps) {
          updateGoogleMapFrame(prov.gps.lat, prov.gps.lng, 10);
          if (gmapProvinceSelect) gmapProvinceSelect.value = prov.id;
        }
      } else {
        updateGoogleMapFrame(16.0544, 107.5909, 6);
      }
    } else {
      if (btnModeGMap) {
        btnModeGMap.classList.remove("active");
        btnModeGMap.style.background = "";
        btnModeGMap.style.color = "";
      }
      if (btnModeSvgMap) {
        btnModeSvgMap.classList.add("active");
        btnModeSvgMap.style.background = "var(--mono-accent)";
        btnModeSvgMap.style.color = "var(--mono-accent-invert)";
      }
      if (googleMapsContainer) googleMapsContainer.style.display = "none";
      if (svgMapContainer) svgMapContainer.style.display = "block";
      if (svgMapTools) svgMapTools.style.display = "flex";
      if (gmapControlsRow) gmapControlsRow.style.display = "none";

      if (mapTitleText) mapTitleText.textContent = "Bản Đồ Số 34 Đơn Vị Hành Chính Cấp Tỉnh (NQ 202/2025/QH15)";
      if (mapSubtitleText) mapSubtitleText.textContent = "Di chuột để xem nhanh, nhấp chuột vào tỉnh bất kỳ để tra cứu chi tiết";
    }
  }

  function populateGMapDropdown() {
    if (!gmapProvinceSelect) return;
    gmapProvinceSelect.innerHTML = `<option value="">-- Chọn nhanh tỉnh thành để bay tới --</option>`;
    window.PROVINCES_DATA.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.id;
      opt.textContent = `${p.name} (${p.capital})`;
      gmapProvinceSelect.appendChild(opt);
    });
  }

  function setGMapType(typeCode, activeBtn) {
    state.gmapType = typeCode;
    [btnGMapTypeSat, btnGMapTypeRoad, btnGMapTypeTerrain].forEach(b => {
      if (b) {
        b.style.background = "";
        b.style.color = "";
      }
    });
    if (activeBtn) {
      activeBtn.style.background = "var(--mono-accent)";
      activeBtn.style.color = "var(--mono-accent-invert)";
    }

    const prov = window.PROVINCES_DATA.find(p => p.id === state.selectedProvinceId);
    if (prov && prov.gps) {
      updateGoogleMapFrame(prov.gps.lat, prov.gps.lng, 10);
    } else {
      updateGoogleMapFrame(16.0544, 107.5909, 6);
    }
    sound.click();
  }

  if (btnModeSvgMap) {
    btnModeSvgMap.addEventListener("click", () => {
      setMapMode("svg");
      sound.click();
    });
  }

  if (btnModeGMap) {
    btnModeGMap.addEventListener("click", () => {
      setMapMode("gmap");
      sound.click();
    });
  }

  if (gmapProvinceSelect) {
    gmapProvinceSelect.addEventListener("change", (e) => {
      const provId = e.target.value;
      if (!provId) return;
      selectProvinceOnMap(provId);
      const prov = window.PROVINCES_DATA.find(p => p.id === provId);
      if (prov && prov.gps) {
        updateGoogleMapFrame(prov.gps.lat, prov.gps.lng, 10);
      }
    });
  }

  if (btnGMapTypeSat) btnGMapTypeSat.addEventListener("click", () => setGMapType("k", btnGMapTypeSat));
  if (btnGMapTypeRoad) btnGMapTypeRoad.addEventListener("click", () => setGMapType("m", btnGMapTypeRoad));
  if (btnGMapTypeTerrain) btnGMapTypeTerrain.addEventListener("click", () => setGMapType("p", btnGMapTypeTerrain));

  if (btnViewOnGoogleMaps) {
    btnViewOnGoogleMaps.addEventListener("click", () => {
      setMapMode("gmap");
      const prov = window.PROVINCES_DATA.find(p => p.id === state.selectedProvinceId);
      if (prov && prov.gps) {
        updateGoogleMapFrame(prov.gps.lat, prov.gps.lng, 11);
        if (gmapProvinceSelect) gmapProvinceSelect.value = prov.id;
      }
      sound.click();
      showToast(`Đã bay tới tọa độ GPS: ${prov ? prov.name : 'Việt Nam'}`);
    });
  }

  function renderSvgMap() {
    mapProvincesGroup.innerHTML = "";
    mapIslandsGroup.innerHTML = "";

    // 1. Render Provinces
    window.VIETNAM_MAP_PATHS.forEach(pData => {
      const provInfo = window.PROVINCES_DATA.find(p => p.id === pData.id) || {};

      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("class", "province-group");
      g.setAttribute("data-id", pData.id);

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", pData.d);
      path.setAttribute("class", "province-geo");
      path.setAttribute("id", `map-prov-${pData.id}`);

      // Path Label
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", pData.labelX);
      text.setAttribute("y", pData.labelY);
      text.setAttribute("font-size", "10");
      text.setAttribute("font-weight", "600");
      text.setAttribute("fill", "var(--text-secondary)");
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("pointer-events", "none");
      text.setAttribute("opacity", "0.85");
      text.textContent = provInfo.name || pData.name;

      g.appendChild(path);
      g.appendChild(text);

      // Mouse events
      path.addEventListener("mouseenter", (e) => {
        const mergedText = provInfo.isMerged
          ? `Sáp nhập: ${provInfo.mergedFrom.join(", ")}`
          : "Nguyên trạng";
        mapTooltip.innerHTML = `<strong>${provInfo.name}</strong> (${provInfo.type})<br><span style="font-size: 11px; opacity: 0.85;">${mergedText}</span>`;
        mapTooltip.classList.add("visible");
        sound.click();
      });

      path.addEventListener("mousemove", (e) => {
        const rect = svgMapContainer.getBoundingClientRect();
        mapTooltip.style.left = `${e.clientX - rect.left}px`;
        mapTooltip.style.top = `${e.clientY - rect.top - 10}px`;
      });

      path.addEventListener("mouseleave", () => {
        mapTooltip.classList.remove("visible");
      });

      path.addEventListener("click", () => {
        selectProvinceOnMap(pData.id);
      });

      mapProvincesGroup.appendChild(g);
    });

    // 2. Render Island Archipelagos
    window.VIETNAM_ISLANDS.forEach(isl => {
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("class", "island-archipelago");
      g.setAttribute("data-owner", isl.ownerId);

      isl.dots.forEach(d => {
        const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        c.setAttribute("cx", d.x);
        c.setAttribute("cy", d.y);
        c.setAttribute("r", 4);
        g.appendChild(c);
      });

      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.setAttribute("x", isl.cx);
      label.setAttribute("y", isl.cy + 18);
      label.setAttribute("class", "island-label");
      label.setAttribute("text-anchor", "middle");
      label.textContent = isl.label;
      g.appendChild(label);

      if (isl.subLabel) {
        const sub = document.createElementNS("http://www.w3.org/2000/svg", "text");
        sub.setAttribute("x", isl.cx);
        sub.setAttribute("y", isl.cy + 30);
        sub.setAttribute("font-size", "9");
        sub.setAttribute("fill", "var(--text-muted)");
        sub.setAttribute("text-anchor", "middle");
        sub.textContent = isl.subLabel;
        g.appendChild(sub);
      }

      g.addEventListener("click", () => {
        selectProvinceOnMap(isl.ownerId);
      });

      mapIslandsGroup.appendChild(g);
    });
  }

  function selectProvinceOnMap(provinceId) {
    state.selectedProvinceId = provinceId;
    const prov = window.PROVINCES_DATA.find(p => p.id === provinceId);
    if (!prov) return;

    // Highlight path
    document.querySelectorAll(".province-geo").forEach(el => el.classList.remove("selected"));
    const pathEl = document.getElementById(`map-prov-${provinceId}`);
    if (pathEl) pathEl.classList.add("selected");

    // Update Inspector
    inspectorPlaceholder.style.display = "none";
    inspectorActive.style.display = "block";

    insType.textContent = prov.type.toUpperCase();
    insRegion.textContent = prov.region;
    insName.textContent = prov.name;
    insStatus.textContent = prov.isMerged
      ? `Hợp nhất từ ${prov.mergedFrom.length} địa phương trước đây`
      : "Giữ nguyên trạng địa giới";
    insCapital.textContent = prov.capital;
    if (insGps && prov.gps) {
      insGps.textContent = `${prov.gps.lat.toFixed(4)}° N, ${prov.gps.lng.toFixed(4)}° E`;
    }
    insArea.textContent = `${prov.areaKm2.toLocaleString("vi-VN")} km²`;
    insPopulation.textContent = `${prov.population} người`;
    insMnemonic.textContent = prov.mnemonic ? `"${prov.mnemonic}"` : "";
    insHighlights.textContent = prov.highlights;

    insFormerList.innerHTML = "";
    prov.mergedFrom.forEach(f => {
      const pill = document.createElement("span");
      pill.className = "former-pill";
      pill.textContent = f;
      insFormerList.appendChild(pill);
    });

    // If currently in Google Maps mode, update iframe
    if (state.mapMode === "gmap" && prov.gps) {
      updateGoogleMapFrame(prov.gps.lat, prov.gps.lng, 10);
      if (gmapProvinceSelect) gmapProvinceSelect.value = prov.id;
    }

    sound.success();
  }

  btnOpenInFlashcard.addEventListener("click", () => {
    if (!state.selectedProvinceId) return;
    const idx = state.deck.findIndex(p => p.id === state.selectedProvinceId);
    if (idx !== -1) {
      state.cardIndex = idx;
    } else {
      cardRegionFilter.value = "all";
      cardTypeFilter.value = "all";
      filterDeck();
      state.cardIndex = state.deck.findIndex(p => p.id === state.selectedProvinceId);
    }
    switchTab("tab-flashcard");
    renderCurrentCard();
  });

  // Zoom controls
  document.getElementById("btnZoomIn").addEventListener("click", () => {
    state.zoomLevel = Math.min(state.zoomLevel + 0.25, 2.5);
    applyZoom();
  });
  document.getElementById("btnZoomOut").addEventListener("click", () => {
    state.zoomLevel = Math.max(state.zoomLevel - 0.25, 0.75);
    applyZoom();
  });
  document.getElementById("btnZoomReset").addEventListener("click", () => {
    state.zoomLevel = 1;
    applyZoom();
  });

  function applyZoom() {
    const baseW = 650;
    const baseH = 1020;
    const newW = baseW / state.zoomLevel;
    const newH = baseH / state.zoomLevel;
    const newX = 150 + (baseW - newW) / 2;
    const newY = 0 + (baseH - newH) / 2;
    vietnamSvgMap.setAttribute("viewBox", `${newX} ${newY} ${newW} ${newH}`);
    sound.click();
  }

  // =========================================================================
  // 8. MODULE 3: MAP CHALLENGE ARENA
  // =========================================================================
  const challengeProvincesGroup = document.getElementById("challengeProvincesGroup");
  const challengeIslandsGroup = document.getElementById("challengeIslandsGroup");
  const gameTargetName = document.getElementById("gameTargetName");
  const gameTargetHint = document.getElementById("gameTargetHint");
  const gameScoreText = document.getElementById("gameScoreText");
  const gameStreakText = document.getElementById("gameStreakText");
  const btnSkipChallenge = document.getElementById("btnSkipChallenge");
  const btnRestartChallenge = document.getElementById("btnRestartChallenge");

  function initChallenge() {
    state.challengeScore = 0;
    state.challengeStreak = 0;
    state.challengePool = [...window.PROVINCES_DATA];
    renderChallengeMap();
    nextChallengeTarget();
  }

  function renderChallengeMap() {
    challengeProvincesGroup.innerHTML = "";
    challengeIslandsGroup.innerHTML = "";

    window.VIETNAM_MAP_PATHS.forEach(pData => {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", pData.d);
      path.setAttribute("class", "province-geo");
      path.setAttribute("id", `chal-prov-${pData.id}`);

      path.addEventListener("click", () => {
        handleChallengeClick(pData.id, path);
      });

      challengeProvincesGroup.appendChild(path);
    });

    window.VIETNAM_ISLANDS.forEach(isl => {
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("class", "island-archipelago");

      isl.dots.forEach(d => {
        const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        c.setAttribute("cx", d.x);
        c.setAttribute("cy", d.y);
        c.setAttribute("r", 4);
        g.appendChild(c);
      });

      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.setAttribute("x", isl.cx);
      label.setAttribute("y", isl.cy + 18);
      label.setAttribute("class", "island-label");
      label.setAttribute("text-anchor", "middle");
      label.textContent = isl.label;
      g.appendChild(label);

      g.addEventListener("click", () => {
        const targetPath = document.getElementById(`chal-prov-${isl.ownerId}`);
        handleChallengeClick(isl.ownerId, targetPath);
      });

      challengeIslandsGroup.appendChild(g);
    });
  }

  function nextChallengeTarget() {
    if (state.challengePool.length === 0) {
      state.challengePool = [...window.PROVINCES_DATA];
    }
    const randIndex = Math.floor(Math.random() * state.challengePool.length);
    state.challengeTarget = state.challengePool[randIndex];

    gameTargetName.textContent = `${state.challengeTarget.name} (${state.challengeTarget.type})`;
    gameTargetHint.textContent = state.challengeTarget.isMerged
      ? `Gợi ý: Hợp nhất từ ${state.challengeTarget.mergedFrom.join(", ")}`
      : `Gợi ý: Tỉnh giữ nguyên trạng thuộc vùng ${state.challengeTarget.region}`;

    gameScoreText.textContent = `Điểm: ${state.challengeScore}`;
    gameStreakText.textContent = `${state.challengeStreak}`;
  }

  function handleChallengeClick(clickedId, pathEl) {
    if (!state.challengeTarget) return;

    if (clickedId === state.challengeTarget.id) {
      // Correct answer
      sound.success();
      pathEl.classList.add("game-target-correct");
      state.challengeScore += 10 + (state.challengeStreak * 2);
      state.challengeStreak += 1;
      showToast(`Chính xác! +${10 + ((state.challengeStreak - 1) * 2)} điểm`);

      // Remove from pool to avoid immediate repeat
      state.challengePool = state.challengePool.filter(p => p.id !== clickedId);

      setTimeout(() => {
        pathEl.classList.remove("game-target-correct");
        nextChallengeTarget();
      }, 700);
    } else {
      // Wrong answer
      sound.error();
      if (pathEl) {
        pathEl.classList.add("game-target-wrong");
        setTimeout(() => pathEl.classList.remove("game-target-wrong"), 500);
      }
      state.challengeStreak = 0;
      gameStreakText.textContent = "0";
      const clickedProv = window.PROVINCES_DATA.find(p => p.id === clickedId);
      showToast(`Chưa đúng. Bạn vừa chọn ${clickedProv ? clickedProv.name : 'tỉnh khác'}`);
    }
  }

  btnSkipChallenge.addEventListener("click", () => {
    state.challengeStreak = 0;
    sound.click();
    nextChallengeTarget();
  });

  btnRestartChallenge.addEventListener("click", () => {
    sound.click();
    initChallenge();
    showToast("Đã bắt đầu lại lượt chơi mới!");
  });

  // =========================================================================
  // 9. MODULE 4: QUIZ (NGÂN HÀNG 120+ CÂU, RANDOM 10-15 CÂU/SET)
  // =========================================================================
  const quizSetSizeSelect = document.getElementById("quizSetSizeSelect");
  const quizCategorySelect = document.getElementById("quizCategorySelect");
  const btnNewQuizSet = document.getElementById("btnNewQuizSet");
  const quizPlayArea = document.getElementById("quizPlayArea");
  const quizStepText = document.getElementById("quizStepText");
  const quizCurrentScore = document.getElementById("quizCurrentScore");
  const quizBankTotalText = document.getElementById("quizBankTotalText");
  const quizProgressFill = document.getElementById("quizProgressFill");
  const quizQuestionText = document.getElementById("quizQuestionText");
  const quizOptionsList = document.getElementById("quizOptionsList");
  const quizExplanationBox = document.getElementById("quizExplanationBox");
  const quizExplanationText = document.getElementById("quizExplanationText");
  const btnNextQuiz = document.getElementById("btnNextQuiz");
  const quizResultArea = document.getElementById("quizResultArea");
  const quizResultTitle = document.getElementById("quizResultTitle");
  const quizResultSubtitle = document.getElementById("quizResultSubtitle");
  const quizFinalScore = document.getElementById("quizFinalScore");
  const quizFinalAccuracy = document.getElementById("quizFinalAccuracy");
  const quizFinalBadge = document.getElementById("quizFinalBadge");
  const btnPlayAnotherSet = document.getElementById("btnPlayAnotherSet");
  const btnReviewInFlashcard = document.getElementById("btnReviewInFlashcard");

  function getFilteredQuestionPool(cat) {
    const db = window.QUIZ_DATABASE || [];
    if (!cat || cat === "all") return db;
    return db.filter(q => {
      if (cat === "law") return q.id >= 1 && q.id <= 15;
      if (cat === "cities") return q.id >= 16 && q.id <= 35;
      if (cat === "original") return q.id >= 36 && q.id <= 50;
      if (cat === "merged") return q.id >= 51 && q.id <= 85;
      if (cat === "geography") return q.id >= 86;
      return true;
    });
  }

  function generateRandomQuizSet() {
    const rawPool = getFilteredQuestionPool(state.quizCategory);
    if (!rawPool || rawPool.length === 0) return;

    // Shuffle pool
    const shuffledPool = [...rawPool].sort(() => Math.random() - 0.5);
    const count = Math.min(state.quizSetSize, shuffledPool.length);
    const selectedSubset = shuffledPool.slice(0, count);

    // Deep clone and randomize options for each question so correct answer is not always A
    state.quizActiveSet = selectedSubset.map(q => {
      const correctText = q.options[q.answer];
      // Shuffle options
      const randomizedOptions = [...q.options].sort(() => Math.random() - 0.5);
      const newAnswerIndex = randomizedOptions.indexOf(correctText);
      return {
        id: q.id,
        question: q.question,
        options: randomizedOptions,
        answer: newAnswerIndex,
        explanation: q.explanation
      };
    });

    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizCorrectCount = 0;
    state.quizAnswered = false;

    // UI state
    if (quizPlayArea) quizPlayArea.style.display = "block";
    if (quizResultArea) quizResultArea.style.display = "none";
    if (quizBankTotalText) {
      quizBankTotalText.textContent = `Kho: ${(window.QUIZ_DATABASE || []).length} câu`;
    }

    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    if (!state.quizActiveSet || state.quizActiveSet.length === 0) {
      generateRandomQuizSet();
      return;
    }

    const totalInSet = state.quizActiveSet.length;
    const q = state.quizActiveSet[state.quizIndex];
    state.quizAnswered = false;

    if (quizStepText) quizStepText.textContent = `Câu hỏi ${state.quizIndex + 1} / ${totalInSet}`;
    if (quizCurrentScore) quizCurrentScore.textContent = `Điểm: ${state.quizScore}`;
    if (quizQuestionText) quizQuestionText.textContent = q.question;
    if (quizExplanationBox) quizExplanationBox.style.display = "none";
    if (btnNextQuiz) btnNextQuiz.style.display = "none";

    // Progress bar
    if (quizProgressFill) {
      const progressPct = ((state.quizIndex) / totalInSet) * 100;
      quizProgressFill.style.width = `${progressPct}%`;
    }

    if (quizOptionsList) {
      quizOptionsList.innerHTML = "";
      q.options.forEach((optText, optIdx) => {
        const btn = document.createElement("button");
        btn.className = "quiz-option-btn";
        btn.innerHTML = `<span class="option-circle">${String.fromCharCode(65 + optIdx)}</span><span>${optText}</span>`;

        btn.addEventListener("click", () => {
          handleQuizAnswer(optIdx, btn);
        });

        quizOptionsList.appendChild(btn);
      });
    }
  }

  function handleQuizAnswer(selectedIdx, btnEl) {
    if (state.quizAnswered) return;
    state.quizAnswered = true;

    const q = state.quizActiveSet[state.quizIndex];
    const optionBtns = quizOptionsList.querySelectorAll(".quiz-option-btn");
    const totalInSet = state.quizActiveSet.length;

    if (selectedIdx === q.answer) {
      sound.success();
      btnEl.classList.add("correct");
      state.quizScore += 10;
      state.quizCorrectCount += 1;
      if (quizCurrentScore) quizCurrentScore.textContent = `Điểm: ${state.quizScore}`;
      showToast("Chính xác (+10 điểm)");
    } else {
      sound.error();
      btnEl.classList.add("wrong");
      if (optionBtns[q.answer]) optionBtns[q.answer].classList.add("correct");
      showToast("Chưa chính xác");
    }

    optionBtns.forEach(btn => btn.disabled = true);

    if (quizExplanationText) quizExplanationText.textContent = q.explanation;
    if (quizExplanationBox) quizExplanationBox.style.display = "block";

    // Update progress bar
    if (quizProgressFill) {
      const progressPct = ((state.quizIndex + 1) / totalInSet) * 100;
      quizProgressFill.style.width = `${progressPct}%`;
    }

    if (btnNextQuiz) {
      if (state.quizIndex < totalInSet - 1) {
        btnNextQuiz.textContent = "Câu tiếp theo";
      } else {
        btnNextQuiz.textContent = "Xem Kết Quả Tổng Kết";
      }
      btnNextQuiz.style.display = "inline-flex";
    }
  }

  function showQuizResults() {
    sound.success();
    if (quizPlayArea) quizPlayArea.style.display = "none";
    if (quizResultArea) quizResultArea.style.display = "block";

    const totalInSet = state.quizActiveSet.length;
    const maxScore = totalInSet * 10;
    const accuracy = Math.round((state.quizCorrectCount / totalInSet) * 100);

    if (quizFinalScore) quizFinalScore.textContent = `${state.quizScore} / ${maxScore}`;
    if (quizFinalAccuracy) quizFinalAccuracy.textContent = `${accuracy}% (${state.quizCorrectCount}/${totalInSet} câu)`;

    if (accuracy === 100) {
      if (quizResultTitle) quizResultTitle.textContent = "Xuất Sắc!";
      if (quizResultSubtitle) quizResultSubtitle.textContent = `Bạn đã trả lời đúng hoàn hảo toàn bộ ${totalInSet}/${totalInSet} câu hỏi.`;
      if (quizFinalBadge) quizFinalBadge.textContent = "Đại Kiện Tướng Địa Lý";
    } else if (accuracy >= 80) {
      if (quizResultTitle) quizResultTitle.textContent = "Kết Quả Tốt!";
      if (quizResultSubtitle) quizResultSubtitle.textContent = `Bạn nắm rất vững bản đồ và địa giới 34 tỉnh thành Việt Nam 2026.`;
      if (quizFinalBadge) quizFinalBadge.textContent = "Chuyên Gia Địa Lý";
    } else if (accuracy >= 60) {
      if (quizResultTitle) quizResultTitle.textContent = "Đạt Yêu Cầu!";
      if (quizResultSubtitle) quizResultSubtitle.textContent = `Bạn đã có nền tảng cơ bản về phương án sắp xếp tỉnh thành mới.`;
      if (quizFinalBadge) quizFinalBadge.textContent = "Nhà Khám Phá Địa Lý";
    } else {
      if (quizResultTitle) quizResultTitle.textContent = "Cần Ôn Luyện Thêm";
      if (quizResultSubtitle) quizResultSubtitle.textContent = `Hãy kết hợp ôn luyện bằng Thẻ Ghi Nhớ và Bản đồ tương tác để đạt kết quả tốt hơn.`;
      if (quizFinalBadge) quizFinalBadge.textContent = "Học Viên Địa Lý";
    }

    showToast(`Hoàn thành bộ đề! Đạt ${state.quizScore}/${maxScore} điểm`);
  }

  if (btnNextQuiz) {
    btnNextQuiz.addEventListener("click", () => {
      const totalInSet = state.quizActiveSet.length;
      if (state.quizIndex < totalInSet - 1) {
        state.quizIndex++;
        sound.click();
        renderQuizQuestion();
      } else {
        showQuizResults();
      }
    });
  }

  if (quizSetSizeSelect) {
    quizSetSizeSelect.addEventListener("change", (e) => {
      state.quizSetSize = parseInt(e.target.value, 10) || 15;
      generateRandomQuizSet();
      showToast(`Đã thiết lập bộ đề ${state.quizSetSize} câu hỏi`);
    });
  }

  if (quizCategorySelect) {
    quizCategorySelect.addEventListener("change", (e) => {
      state.quizCategory = e.target.value;
      generateRandomQuizSet();
      showToast(`Đã chọn chủ đề: ${e.target.selectedOptions[0].text}`);
    });
  }

  if (btnNewQuizSet) {
    btnNewQuizSet.addEventListener("click", () => {
      sound.click();
      generateRandomQuizSet();
      showToast(`Đã tạo bộ đề ngẫu nhiên mới (${state.quizSetSize} câu)`);
    });
  }

  if (btnPlayAnotherSet) {
    btnPlayAnotherSet.addEventListener("click", () => {
      sound.click();
      generateRandomQuizSet();
    });
  }

  if (btnReviewInFlashcard) {
    btnReviewInFlashcard.addEventListener("click", () => {
      switchTab("tab-flashcard");
    });
  }

  // =========================================================================
  // 10. MODULE 5: DIRECTORY & INSTANT SEARCH
  // =========================================================================
  const directorySearchInput = document.getElementById("directorySearchInput");
  const dirFilterRegion = document.getElementById("dirFilterRegion");
  const directoryGrid = document.getElementById("directoryGrid");

  // Modal elements
  const provinceModalOverlay = document.getElementById("provinceModalOverlay");
  const btnModalClose = document.getElementById("btnModalClose");
  const modalContent = document.getElementById("modalContent");

  function removeVietnameseDiacritics(str) {
    if (!str) return "";
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .toLowerCase();
  }

  function renderDirectory() {
    const query = removeVietnameseDiacritics(directorySearchInput.value.trim());
    const regionVal = dirFilterRegion.value;

    const filtered = window.PROVINCES_DATA.filter(p => {
      const matchRegion = regionVal === "all" || p.region === regionVal;
      if (!matchRegion) return false;

      if (!query) return true;

      const normName = removeVietnameseDiacritics(p.name);
      const normCapital = removeVietnameseDiacritics(p.capital);
      const normFormer = p.mergedFrom.some(f => removeVietnameseDiacritics(f).includes(query));

      return normName.includes(query) || normCapital.includes(query) || normFormer;
    });

    directoryGrid.innerHTML = "";

    if (filtered.length === 0) {
      directoryGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">Không tìm thấy địa phương nào phù hợp với từ khóa "${directorySearchInput.value}".</div>`;
      return;
    }

    filtered.forEach(p => {
      const card = document.createElement("div");
      card.className = "directory-card";

      const mergedPills = p.mergedFrom.map(f => `<span class="dir-merged-pill">${f}</span>`).join("");

      card.innerHTML = `
        <div>
          <div class="directory-card-top">
            <h4 class="dir-name">${p.name}</h4>
            <span class="province-badge-type">${p.type.includes("Thành phố") ? "ĐÔ THỊ TW" : "TỈNH"}</span>
          </div>
          <div class="dir-meta">${p.region} &bull; ${p.capital}</div>
          <div class="dir-merged-tags">${mergedPills}</div>
        </div>
        <div class="dir-footer">
          <span>${p.areaKm2.toLocaleString("vi-VN")} km²</span>
          <span>${p.population}</span>
        </div>
      `;

      card.addEventListener("click", () => {
        openProvinceModal(p);
      });

      directoryGrid.appendChild(card);
    });
  }

  function openProvinceModal(prov) {
    sound.click();
    modalContent.innerHTML = `
      <div class="inspector-badge-row">
        <span class="province-badge-type">${prov.type.toUpperCase()}</span>
        <span class="region-tag">${prov.region}</span>
      </div>
      <h2 style="font-size: 28px; font-weight: 800; margin-bottom: 6px;">${prov.name}</h2>
      <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 20px;">
        ${prov.isMerged ? `Hợp nhất từ: ${prov.mergedFrom.join(", ")}` : "Đơn vị hành chính giữ nguyên trạng địa giới"}
      </p>

      <div class="back-grid" style="margin-bottom: 20px;">
        <div class="back-item">
          <div class="back-item-label">Trung tâm hành chính</div>
          <div class="back-item-val">${prov.capital}</div>
        </div>
        <div class="back-item">
          <div class="back-item-label">Diện tích / Dân số</div>
          <div class="back-item-val">${prov.areaKm2.toLocaleString("vi-VN")} km² &bull; ${prov.population}</div>
        </div>
      </div>

      <div class="mnemonic-box" style="margin-bottom: 16px;">
        <div class="mnemonic-text">"${prov.mnemonic || ''}"</div>
      </div>

      <p class="highlights-text" style="margin-bottom: 24px;">${prov.highlights}</p>

      <div style="display: flex; gap: 10px;">
        <button class="btn-deck btn-master" id="btnModalStudyCard" style="flex: 1; justify-content: center;">
          Học Thẻ Tỉnh Này
        </button>
        <button class="btn-deck btn-secondary" id="btnModalViewOnMap" style="flex: 1; justify-content: center;">
          Xem Trên Bản Đồ
        </button>
      </div>
    `;

    document.getElementById("btnModalStudyCard").addEventListener("click", () => {
      closeProvinceModal();
      state.selectedProvinceId = prov.id;
      btnOpenInFlashcard.click();
    });

    document.getElementById("btnModalViewOnMap").addEventListener("click", () => {
      closeProvinceModal();
      switchTab("tab-map");
      selectProvinceOnMap(prov.id);
    });

    provinceModalOverlay.classList.add("active");
  }

  function closeProvinceModal() {
    provinceModalOverlay.classList.remove("active");
  }

  btnModalClose.addEventListener("click", closeProvinceModal);
  provinceModalOverlay.addEventListener("click", (e) => {
    if (e.target === provinceModalOverlay) closeProvinceModal();
  });

  directorySearchInput.addEventListener("input", renderDirectory);
  dirFilterRegion.addEventListener("change", renderDirectory);

  // =========================================================================
  // 11. MODULE 6: GEMINI AI GEOGRAPHY TUTOR
  // =========================================================================
  const GEMINI_MODEL = "gemini-3.5-flash-lite";

  const aiChatMessages = document.getElementById("aiChatMessages");
  const aiTypingIndicator = document.getElementById("aiTypingIndicator");
  const aiInputForm = document.getElementById("aiInputForm");
  const aiInputField = document.getElementById("aiInputField");
  const btnAiSend = document.getElementById("btnAiSend");
  const btnClearAiChat = document.getElementById("btnClearAiChat");
  const btnConfigAiKey = document.getElementById("btnConfigAiKey");
  const floatingAiLauncher = document.getElementById("floatingAiLauncher");
  const btnAskAiAboutProvince = document.getElementById("btnAskAiAboutProvince");
  const btnFlashcardAskAi = document.getElementById("btnFlashcardAskAi");
  const btnQuizAskAi = document.getElementById("btnQuizAskAi");

  function formatAiMarkdown(text) {
    if (!text) return "";
    let html = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    
    // Bold: **text**
    html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    // Italic: *text*
    html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
    // Headers: ### Header
    html = html.replace(/^### (.*$)/gim, "<h4 style='margin: 8px 0 4px; font-weight:700;'>$1</h4>");
    html = html.replace(/^## (.*$)/gim, "<h3 style='margin: 10px 0 6px; font-weight:800; color:var(--mono-accent);'>$1</h3>");
    // Bullet points: * or -
    html = html.replace(/^\s*[\*\-]\s+(.*$)/gim, "<li style='margin-left: 18px;'>$1</li>");
    // Numbered list: 1. 2.
    html = html.replace(/^\s*(\d+)\.\s+(.*$)/gim, "<li style='margin-left: 18px;'>$1</li>");
    // Paragraphs / newlines
    html = html.replace(/\n\n/g, "<br><br>");
    html = html.replace(/\n/g, "<br>");
    return html;
  }

  function appendChatMessage(text, sender = "bot") {
    if (!aiChatMessages) return;
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${sender}`;

    const avatar = document.createElement("div");
    avatar.className = "bubble-avatar";
    avatar.textContent = sender === "user" ? "BẠN" : "AI";

    const content = document.createElement("div");
    content.className = "bubble-content";
    content.innerHTML = sender === "user" ? text.replace(/</g, "&lt;").replace(/>/g, "&gt;") : formatAiMarkdown(text);

    bubble.appendChild(avatar);
    bubble.appendChild(content);
    aiChatMessages.appendChild(bubble);
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
  }

  async function askGemini(promptText) {
    if (!promptText || !promptText.trim()) return;
    const cleanPrompt = promptText.trim();
    appendChatMessage(cleanPrompt, "user");
    if (aiInputField) aiInputField.value = "";
    if (btnAiSend) btnAiSend.disabled = true;
    if (aiTypingIndicator) aiTypingIndicator.style.display = "flex";
    if (aiChatMessages) aiChatMessages.scrollTop = aiChatMessages.scrollHeight;

    const systemInstruction = "Bạn là Trợ lý AI Gia sư Địa lý Việt Nam 2026, chuyên gia về Nghị quyết số 202/2025/QH15 của Quốc hội về việc sắp xếp đơn vị hành chính cấp tỉnh (cả nước còn 34 đơn vị: 6 thành phố trực thuộc Trung ương, 28 tỉnh). Hãy trả lời bằng tiếng Việt sư phạm, khúc chiết, chuẩn xác, truyền cảm hứng học tập cho học sinh và giáo viên. Dùng định dạng gạch đầu dòng và in đậm các từ khóa quan trọng.";

    const requestPayload = {
      system_instruction: {
        parts: [{ text: systemInstruction }]
      },
      contents: [{
        parts: [{ text: cleanPrompt }]
      }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1200
      }
    };

    try {
      let replyText = "";
      let handled = false;

      // 1. Ưu tiên gọi qua Server proxy (/api/gemini) để bảo mật API key từ .env
      try {
        const proxyRes = await fetch("/api/gemini", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestPayload)
        });

        if (proxyRes.ok) {
          const data = await proxyRes.json();
          if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
            replyText = data.candidates[0].content.parts.map(p => p.text).join("");
          } else if (data.error) {
            replyText = `Lỗi từ Gemini AI: ${data.error.message || "Vui lòng thử lại sau."}`;
          }
          handled = true;
        } else if (proxyRes.status === 500) {
          const data = await proxyRes.json().catch(() => ({}));
          if (data.error && data.error.message) {
            replyText = `Lỗi máy chủ: ${data.error.message}`;
            handled = true;
          }
        }
      } catch (proxyErr) {
        // Máy chủ proxy không chạy hoặc không truy cập được (vd: chạy file:/// hoặc static GitHub Pages)
      }

      // 2. Nếu không gọi được server proxy, kiểm tra API key cá nhân người dùng đã lưu ở localStorage
      if (!handled) {
        const customKey = localStorage.getItem("user_gemini_api_key");
        if (customKey && customKey.trim()) {
          const directUrl = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${encodeURIComponent(customKey.trim())}`;
          const directRes = await fetch(directUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestPayload)
          });
          const data = await directRes.json();
          if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
            replyText = data.candidates[0].content.parts.map(p => p.text).join("");
          } else if (data.error) {
            replyText = `Lỗi kết nối AI (Khóa cá nhân): ${data.error.message || "Kiểm tra lại API Key."}`;
          }
          handled = true;
        }
      }

      if (!handled && !replyText) {
        replyText = `
⚠️ <strong>Chưa thể kết nối tới Trợ lý AI:</strong><br>
&bull; <em>Chạy trên máy tính:</em> Vui lòng chạy máy chủ bằng lệnh <code>node server.js</code> trong terminal để hệ thống tự động bảo mật và sử dụng API Key trong file <code>.env</code>.<br>
&bull; <em>Chạy trên GitHub Pages (web tĩnh):</em> Vui lòng bấm nút <strong>Cài Đặt API Key</strong> ở góc trên bên phải khung chat để điền Google Gemini API Key cá nhân của bạn.
        `.trim();
      }

      appendChatMessage(replyText, "bot");
      sound.success();
    } catch (err) {
      appendChatMessage("Không thể kết nối tới Google AI. Vui lòng kiểm tra lại kết nối mạng hoặc thử lại sau.", "bot");
      sound.error();
    } finally {
      if (aiTypingIndicator) aiTypingIndicator.style.display = "none";
      if (btnAiSend) btnAiSend.disabled = false;
      if (aiChatMessages) aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
    }
  }

  // Bind Form Submit
  if (aiInputForm) {
    aiInputForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = aiInputField.value.trim();
      if (text) {
        askGemini(text);
      }
    });
  }

  // Bind Clear Chat
  if (btnClearAiChat) {
    btnClearAiChat.addEventListener("click", () => {
      aiChatMessages.innerHTML = `
        <div class="chat-bubble bot">
          <div class="bubble-avatar">AI</div>
          <div class="bubble-content">
            <strong>Xin chào! Tôi là Trợ lý AI Gia sư Địa lý Việt Nam 2026.</strong><br>
            Lịch sử trò chuyện đã được làm mới. Hãy chọn câu hỏi gợi ý bên trên hoặc nhập câu hỏi bên dưới.
          </div>
        </div>
      `;
      sound.click();
      showToast("Đã làm mới lịch sử trò chuyện AI");
    });
  }

  // Bind Config Custom API Key (Dành cho web tĩnh / GitHub Pages)
  if (btnConfigAiKey) {
    btnConfigAiKey.addEventListener("click", () => {
      const currentKey = localStorage.getItem("user_gemini_api_key") || "";
      const input = prompt(
        "Nhập Google Gemini API Key cá nhân của bạn (Lấy miễn phí tại https://aistudio.google.com/app/apikey):\n(Để trống nếu muốn xóa và dùng API key mặc định từ máy chủ node server.js)",
        currentKey
      );
      if (input !== null) {
        const trimmed = input.trim();
        if (trimmed) {
          localStorage.setItem("user_gemini_api_key", trimmed);
          showToast("Đã lưu API Key cá nhân thành công!");
        } else {
          localStorage.removeItem("user_gemini_api_key");
          showToast("Đã xóa API Key cá nhân. Sẽ ưu tiên máy chủ nội bộ.");
        }
      }
    });
  }

  // Bind Suggestion Buttons
  document.querySelectorAll(".ai-sug-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const prompt = btn.getAttribute("data-prompt");
      if (prompt) {
        sound.click();
        askGemini(prompt);
      }
    });
  });

  // Bind Floating AI Launcher
  if (floatingAiLauncher) {
    floatingAiLauncher.addEventListener("click", () => {
      switchTab("tab-ai-tutor");
      if (aiInputField) aiInputField.focus();
    });
  }

  // Bind Ask AI About Province from Inspector
  if (btnAskAiAboutProvince) {
    btnAskAiAboutProvince.addEventListener("click", () => {
      if (!state.selectedProvinceId) return;
      const prov = window.PROVINCES_DATA.find(p => p.id === state.selectedProvinceId);
      if (!prov) return;
      switchTab("tab-ai-tutor");
      const prompt = `Hãy phân tích chi tiết về ${prov.name} (${prov.type}) theo Nghị quyết 202/2025/QH15: nguồn gốc sáp nhập từ các địa phương trước đây, trung tâm hành chính (${prov.capital}), quy mô diện tích (${prov.areaKm2} km2), dân số (${prov.population}), tiềm năng kinh tế - xã hội và danh lam thắng cảnh nổi bật.`;
      askGemini(prompt);
    });
  }

  // Bind Ask AI from Flashcard Back
  if (btnFlashcardAskAi) {
    btnFlashcardAskAi.addEventListener("click", () => {
      const curCard = state.deck[state.cardIndex];
      if (!curCard) return;
      switchTab("tab-ai-tutor");
      const prompt = `Phân tích sâu hơn và cung cấp các câu chuyện lịch sử, kinh tế, địa lý thú vị giúp ghi nhớ dễ dàng về ${curCard.name} (${curCard.type}).`;
      askGemini(prompt);
    });
  }

  // Bind Ask AI from Quiz Explanation
  if (btnQuizAskAi) {
    btnQuizAskAi.addEventListener("click", () => {
      if (!state.quizActiveSet || state.quizActiveSet.length === 0) return;
      const curQ = state.quizActiveSet[state.quizIndex];
      if (!curQ) return;
      switchTab("tab-ai-tutor");
      const correctAns = curQ.options[curQ.answer];
      const prompt = `Hãy giảng giải chi tiết hơn cho học sinh câu hỏi trắc nghiệm địa lý: "${curQ.question}". Đáp án đúng là "${correctAns}". Giải thích cặn kẽ vì sao và mở rộng kiến thức liên quan theo Nghị quyết 202/2025/QH15.`;
      askGemini(prompt);
    });
  }

  // =========================================================================
  // 11B. TEACHER AUTHOR POPUP CONTROLLER (10S AUTO-DISMISS)
  // =========================================================================
  const teacherPopup = document.getElementById("teacherPopup");
  const teacherPopupClose = document.getElementById("teacherPopupClose");
  const teacherInfoBtn = document.getElementById("teacherInfoBtn");
  const floatingTeacherLauncher = document.getElementById("floatingTeacherLauncher");
  const teacherAvatarContainer = document.getElementById("teacherAvatarContainer");
  const teacherProgressBar = document.getElementById("teacherProgressBar");
  const teacherCountdownText = document.getElementById("teacherCountdownText");
  const teacherLightbox = document.getElementById("teacherLightbox");
  const btnTeacherLightboxClose = document.getElementById("btnTeacherLightboxClose");

  const TEACHER_POPUP_DURATION_MS = 10000;
  let teacherRemainingMs = TEACHER_POPUP_DURATION_MS;
  let teacherTimerInterval = null;
  let teacherLastTickTime = null;
  let isTeacherTimerPaused = false;
  let isTeacherPopupOpen = false;

  function updateTeacherTimerUI() {
    const secondsLeft = Math.max(1, Math.ceil(teacherRemainingMs / 1000));
    if (teacherCountdownText) {
      if (isTeacherTimerPaused) {
        teacherCountdownText.innerHTML = `⏸ Tạm dừng (<strong>${secondsLeft}s</strong>)`;
      } else {
        teacherCountdownText.innerHTML = `Tự tắt sau: <strong>${secondsLeft}s</strong>`;
      }
    }
    if (teacherProgressBar) {
      const pct = Math.max(0, Math.min(100, (teacherRemainingMs / TEACHER_POPUP_DURATION_MS) * 100));
      teacherProgressBar.style.width = `${pct}%`;
    }
  }

  function startTeacherCountdown(durationMs) {
    clearInterval(teacherTimerInterval);
    teacherRemainingMs = durationMs;
    teacherLastTickTime = Date.now();
    isTeacherTimerPaused = false;
    updateTeacherTimerUI();

    teacherTimerInterval = setInterval(() => {
      if (isTeacherTimerPaused) return;

      const now = Date.now();
      const delta = now - teacherLastTickTime;
      teacherLastTickTime = now;
      teacherRemainingMs = Math.max(0, teacherRemainingMs - delta);
      updateTeacherTimerUI();

      if (teacherRemainingMs <= 0) {
        clearInterval(teacherTimerInterval);
        closeTeacherPopup();
      }
    }, 100);
  }

  function openTeacherPopup() {
    if (!teacherPopup) return;
    isTeacherPopupOpen = true;

    if (floatingTeacherLauncher) {
      floatingTeacherLauncher.classList.remove("visible");
    }

    teacherPopup.classList.remove("hiding");
    teacherPopup.classList.add("show");

    startTeacherCountdown(TEACHER_POPUP_DURATION_MS);
  }

  function closeTeacherPopup() {
    if (!teacherPopup || !isTeacherPopupOpen) return;
    isTeacherPopupOpen = false;
    clearInterval(teacherTimerInterval);

    teacherPopup.classList.add("hiding");
    setTimeout(() => {
      teacherPopup.classList.remove("show", "hiding");
      if (floatingTeacherLauncher) {
        floatingTeacherLauncher.classList.add("visible");
      }
    }, 450);
  }

  function pauseTeacherCountdown() {
    if (!isTeacherPopupOpen || teacherRemainingMs <= 0) return;
    isTeacherTimerPaused = true;
    updateTeacherTimerUI();
  }

  function resumeTeacherCountdown() {
    if (!isTeacherPopupOpen || teacherRemainingMs <= 0) return;
    isTeacherTimerPaused = false;
    teacherLastTickTime = Date.now();
    updateTeacherTimerUI();
  }

  // Setup Event Listeners for Teacher Popup
  if (teacherPopup) {
    // Hover: pause timer to read comfortably
    teacherPopup.addEventListener("mouseenter", pauseTeacherCountdown);
    teacherPopup.addEventListener("mouseleave", resumeTeacherCountdown);
  }

  if (teacherPopupClose) {
    teacherPopupClose.addEventListener("click", (e) => {
      e.stopPropagation();
      closeTeacherPopup();
    });
  }

  if (teacherInfoBtn) {
    teacherInfoBtn.addEventListener("click", () => {
      openTeacherPopup();
    });
  }

  if (floatingTeacherLauncher) {
    floatingTeacherLauncher.addEventListener("click", () => {
      openTeacherPopup();
    });
  }

  // Lightbox for full photo preview
  if (teacherAvatarContainer && teacherLightbox) {
    teacherAvatarContainer.addEventListener("click", () => {
      teacherLightbox.classList.add("active");
      pauseTeacherCountdown();
    });
  }

  if (btnTeacherLightboxClose && teacherLightbox) {
    btnTeacherLightboxClose.addEventListener("click", () => {
      teacherLightbox.classList.remove("active");
      resumeTeacherCountdown();
    });
  }

  if (teacherLightbox) {
    teacherLightbox.addEventListener("click", (e) => {
      if (e.target === teacherLightbox) {
        teacherLightbox.classList.remove("active");
        resumeTeacherCountdown();
      }
    });
  }

  // =========================================================================
  // 12. INITIALIZATION ON LOAD
  // =========================================================================
  function initApp() {
    applyThemeAndMode();
    renderCurrentCard();
    renderSvgMap();
    populateGMapDropdown();
    generateRandomQuizSet();
    renderDirectory();
    updateMasteryStats();

    // Tự động mở popup thông tin Giáo viên tác giả sau 600ms (hiển thị 10s rồi tự tắt)
    setTimeout(() => {
      openTeacherPopup();
    }, 600);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }

})();
