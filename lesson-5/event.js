const School = require('./school'); // Import the School class
const school = new School(); // Create an instance of the School class

// Register a listener for the 'bellring' event
school.on('bellring', ({ period, text }) => {
    console.log(`We need to run, ${period} ${text}`);
});

school.startPeriod();
