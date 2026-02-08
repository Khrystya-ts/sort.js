import { createServer } from 'node:http';

const server = createServer((req, res) => {
    console.log('URL =>', req.url);
    console.log('METHOD =>', req.method);

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            name: "test",
            price: 100
        }));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not found' }));
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});
