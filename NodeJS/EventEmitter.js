const EventEmitter = require('events');
const emitter = new EventEmitter();

//register a listener to that event
emitter.on('messageLogged',(arg)=>{
    console.log('Listener called',arg);
});

//raise an event
emitter.emit('messageLogged',{id: 1, url: 'http://'});
