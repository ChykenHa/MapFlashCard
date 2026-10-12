const http = require('http');
const fs = require('fs');
const path = require('path');

// Tự động nạp biến môi trường từ .env nếu có (Node.js 20.12+ & Node 24+)
try {
  if (typeof process.loadEnvFile === 'function') {
    process.loadEnvFile(path.join(__dirname, '.env'));
  }
} catch (e) {
  // Bỏ qua nếu chưa tạo file .env
}

const PORT = parseInt(process.env.PORT, 10) || 3456;
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-3.5-flash-lite';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

const server = http.createServer(async (req, res) => {
  const urlPath = req.url.split('?')[0];

  // API Proxy endpoint cho Gemini: bảo mật API key hoàn toàn trên Server
  if (req.method === 'POST' && urlPath === '/api/gemini') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
          res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
          return res.end(JSON.stringify({
            error: { message: 'Chưa cấu hình GEMINI_API_KEY trong file .env trên máy chủ.' }
          }));
        }

        const payload = JSON.parse(body || '{}');
        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

        const apiResponse = await fetch(geminiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await apiResponse.json();
        res.writeHead(apiResponse.status, {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify(data));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ error: { message: err.message || 'Lỗi kết nối máy chủ Gemini' } }));
      }
    });
    return;
  }

  // Phục vụ Static Files
  let filePath = path.join(__dirname, urlPath === '/' ? 'index.html' : urlPath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`=================================================`);
  console.log(`🚀 MapFlashCard Server đang chạy tại: http://127.0.0.1:${PORT}/`);
  console.log(`🔑 Gemini API Key: ${process.env.GEMINI_API_KEY ? 'Đã tải thành công từ .env' : 'Chưa cấu hình trong .env'}`);
  console.log(`🤖 Model: ${GEMINI_MODEL}`);
  console.log(`=================================================`);
});
