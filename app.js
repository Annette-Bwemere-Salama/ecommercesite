const http = require('http');

// console.log(routes.someText);

const routes = require('./routes')

const server = http.createServer(routes.handler);
server.listen(3000);

