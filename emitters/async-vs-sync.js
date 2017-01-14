// require events module
const EventEmitter = require('events');

// subclass EventEmitter 
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// attach a listener 
myEmitter.on('yo', (a, b) => {
    // setImmediate() switches listener function to async mode 
    setImmediate(() => {
        console.log('this happens asynchronously!');
    });
});
myEmitter.emit('yo', 'a', 'b');