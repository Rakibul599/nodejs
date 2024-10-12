const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        console.log("Class has started");
        
        // Raise an event after 2 seconds
        setTimeout(() => {
            this.emit('bellring', {
                period: "first",
                text: "period has ended"
            });
        }, 2000);
    }
}

module.exports = School;
