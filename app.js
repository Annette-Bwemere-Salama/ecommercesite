const http = require('http');

const fs = require('fs')
const server = http.createServer((req, res) => {
    const url = req.url

    if (url === '/') {
        res.write("<html>");
        res.write("<head><title>Entrez Message</title><head>")
        res.write("<body><form action='/message' method='POST'><input type='test' name='message'><button type={submit}>Send</button></form></body>");
        res.write("<body><form><input ></form></body>")
        res.write("</html>")
        return res.end();
    }
    // console.log(req.url, req.method, req.headers);
    if (url === '/message' && method === 'POST') {
        fs.writeFile('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write("<html>");
    res.write("<head><title>My First Page</title><head>");
    res.write("<body><h1>Hello From my Node.js Server!</h1></body>");
    res.write("</html>")
    res.end();
});

server.listen(3000);

