'use strict';

const sioc = require('socket.io-client');
const socket = sioc.connect('http://localhost:3000/csps');

// Your driver application will act as a socket client to the CSPS server. In your driver.js file, you should have the following processes implemented:

// *X Connect to the CSPS Socket Server, in the csps namespace
// *X Listen for the pickup event from the CSPS server. When you hear that event, look at the payload sent and simulate picking up the package
    // *** Wait one second
    // *** Log picked up order # to the console
    // *** Emit an in-transit event with the same order payload passed along

// *X Listen for the in-transit event. When heard, look at the payload and simulate the delivery of the package
    // *** Wait three seconds
    // *** Log delivered order # to the console
    // *** Emit a delivered event with the same order payload passed along

socket.on('pickup-heard', (payload) => {
  setTimeout(() => {
    console.log('Picked up order', payload.orderID);
    socket.emit('in-transit', payload);
  }, 1000);
});

socket.on('in-transit-heard', (payload) => {
  setTimeout(() => {
    console.log('Delivered order', payload.orderID);
    socket.emit('delivered', payload);
  }, 3000);
});
