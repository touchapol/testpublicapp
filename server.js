// Minimal Node test app for NodeCloud. No dependencies.
const http = require('node:http');

const port = Number(process.env.PORT) || 3000;
const started = new Date();

http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ ok: true, uptime: process.uptime() }));
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>testpublicapp</title>
<style>body{font:16px/1.5 system-ui,sans-serif;max-width:640px;margin:48px auto;padding:0 16px}code{background:#eee;padding:2px 6px;border-radius:4px}</style></head>
<body><h1>testpublicapp is running</h1>
<p>Node <code>${process.version}</code>, started <code>${started.toISOString()}</code>.</p>
<p>Health check: <a href="/health">/health</a></p></body></html>`);
}).listen(port, () => console.log(`listening on ${port}`));
