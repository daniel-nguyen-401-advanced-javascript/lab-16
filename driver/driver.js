'use strict';

// Your driver application will act as a TCP Socket Connection to the CSPS Socket server. In your driver.js file, you should have the following processes implemented:

// * Connect to the CSPS Socket Server
// * Listen for the data event from the CSPS Socket Server. When you hear that event, look at the payload sent and parse it. If it has a property event equal to pickup, then simulate picking up the package
// * Wait one second
// * Log picked up order # to the console
// * Create an object with key values event equal to in-transit and payload equal to the order object you received.
// * Send that object to the server

// You should then kick off the delivery simulation
// * Wait three seconds
// * Log delivered order # to the console
// * Create an object with key values event equal to delivered and payload equal to the order object you received.
// * Send that object to the server

// // example logs
// picked up order 1
// delivered order 1
// picked up order 2
// delivered order 2
// picked up order 3
// delivered order 3