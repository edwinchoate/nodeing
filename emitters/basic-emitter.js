const EventEmitter = require('events');

// subclass the node EventEmitter class 
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// .on method is used to register emitters
myEmitter.on('event', () => {
    console.log('a wild event appeared!');
});

// .emit method is used to trigger events 
myEmitter.emit('event');