const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Waterfull', () => {
    console.log('Please turn off Motor');
    setTimeout(() => {
        console.log("It's a gentle reminder");
    }, 3000);

});
console.log('The script is  running');

myEmitter.emit('Waterfull');
console.log('The script is still running');