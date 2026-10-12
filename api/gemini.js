// Vercel Serverless Function: /api/gemini
// Xử lý proxy bảo mật cho Google Gemini AI trên nền tảng Vercel

module.exports = async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: { message: 'Chỉ chấp nhận phương thức POST' } });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL || 'gemini-3.5-flash-lite';

  if (!apiKey) {
    res.status(500).json({
      error: { message: 'Chưa cấu hình biến môi trường GEMINI_API_KEY trên Vercel.' }
    });
    return;
  }

  try {
    const payload = req.body || {};
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const apiResponse = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: typeof payload === 'string' ? payload : JSON.stringify(payload)
    });

    const data = await apiResponse.json();
    res.status(apiResponse.status).json(data);
  } catch (err) {
    res.status(500).json({
      error: { message: err.message || 'Lỗi kết nối máy chủ Gemini từ Vercel' }
    });
  }
};
