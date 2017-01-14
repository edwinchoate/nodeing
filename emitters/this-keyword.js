const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// this refers to the myEmitter to which an event is attached
// you can add any number of params to a listen function 
myEmitter.on('hi', function(a, b, c) {
    console.log(a, b, c, this);
});

// add params at the end of .emit in same order as .on callback 
myEmitter.emit('hi', 'wild', 'event', 'appeared!');