const http = require('http');
const routes = require('./routes'); // because it is not a global object, we need to specify the path
const server = http.createServer(routes.handler);
console.log(routes.someText);
server.listen(3000);

// how to stop the server from running?  Ctrl-C in the terminal window
// or add this code: process.exit(); after console.log(req);

// single thread, event loop, event driven non-blocking I/O