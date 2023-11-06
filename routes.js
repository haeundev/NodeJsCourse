const fs = require('fs');
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>'); // write the response
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end(); // send the response
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk); // chunk is a buffer
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString(); // Buffer is a global object
            const message = parsedBody.split('=')[1];
            // fs.writeFileSync('message.txt', message); // do not use sync in production code. It will block the code execution until the file is created.
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302; // 302 means redirection
                res.setHeader('Location', '/'); // redirect to the root
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');  // set the header
    res.write('<html>'); // write the response
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end(); // send the response
};

module.exports = {
    handler : requestHandler,
    someText : 'Some hard coded text'
}