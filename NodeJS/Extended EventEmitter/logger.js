const EventEmitter = require('events');
var url = 'http://logger.io';

class Logger extends EventEmitter 
{
    log(message)
    {
        console.log(message);
        //rase an event
        this.emit('messageLogged',{id: 1, url: 'http://'});
    }
}

module.exports = Logger
