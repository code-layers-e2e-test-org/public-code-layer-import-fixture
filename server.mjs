import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';

const content = await readFile(new URL('./index.html', import.meta.url));
const port = Number.parseInt(process.env.PORT ?? '8000', 10);

createServer((request, response) => {
  if (new URL(request.url, 'http://localhost').pathname !== '/') {
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(content);
}).listen(port, '0.0.0.0');
