const EventEmitter = require('events');

//loads the logger module
const Logger = require('./logger'); //Logger here refers to the class name 
const logger = new Logger();

//register a listener to that event
logger.on('messageLogged',(arg)=>{
    console.log('Listener called',arg);
});

logger.log('message');
