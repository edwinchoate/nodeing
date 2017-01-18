const http = require('http');

http.createServer((req, res) => {
    // you can access each part of the HTTP request like so:
    let headers = req.headers;
    let method = req.method;
    let url = req.url;
    let body = [];
    // always handle the error event. The req param is a ReadableStream
    // which inherits EventEmitter, so it can emit the error event 
    req.on('error', (err) => {
        console.log(err);
    });
    // the body is a data steam and is read chunk by chunk 
    req.on('data', (chunk) => {
        body.push(chunk);
    });
    // once the body stream ends, create a string that contains all of
    // the content in the body 
    req.on('end', () => {
        body = Buffer.concat(body).toString();
    });
    console.log(method, url, headers, body);
}).listen(4000);