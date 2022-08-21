const http = require('http');
const fs = require('fs');

const port = process.env.port || 3000;

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    if (req.url == '/hello') {
        res.end('<h1> This is Dhruv Thakar</h1> <p> Hey , Now is the time To Work.</p>');
    } else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>About Dhruv Thakar</h1> <p> Hey , Now is the time To Work.</p>');
    } else if (req.url == '/a') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString);
    } else {
        res.statusCode = 404;
        res.end('<h1>Not Found</h1> <p> Hey , Now is the time To Work.</p>');

    }

})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});