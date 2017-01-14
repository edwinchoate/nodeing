// load up the http module using node require 
const http = require('http');

const hostname = 'localhost';
const port = 3000;

// creating a server takes a callback that takes args:
// req - an http request 
// res = an http response 
const server = http.createServer((req, res) => {
    // build a response that's something like this:
    //
    // HTTP/1.1 200 OK 
    // Content-Type: text/html
    // 
    // <!DOCTYPE html><html><head></head><body><a href="https://reddit.com/r/random">hit me</a></body></html>
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<!DOCTYPE html><html><head></head><body><a href="https://reddit.com/r/random">hit me</a></body></html>');
});

// fire up the server
server.listen(port, hostname);