const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// if an EventEmitter doesn't have an 'error' listener attached, node crashes
// myEmitter.emit('error');

// you can register an error listener on the process object to handle these
process.on('uncaughtException', (err) => {
    console.log('whoops, there was an error');
});

myEmitter.emit('error');