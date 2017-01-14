const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

let i = 0;

// normally, the listener function is executed every time the event is emitted
myEmitter.on('doink', () => {
    let n = ++i;
    console.log('doink #' + n);
});

myEmitter.emit('doink'); // prints doink #1
myEmitter.emit('doink'); // prints doink #2

let j = 0;

// .once only lets the listener function execute once 
myEmitter.once('yo', () => {
    let n = ++j;
    console.log('doink #' + n);
});

myEmitter.emit('yo'); // print doink #1
myEmitter.emit('yo'); // does nothing