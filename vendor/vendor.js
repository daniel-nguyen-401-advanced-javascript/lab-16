'use strict';

// Your vendor application will act as a TCP Socket Connection to the CSPS Socket Server. In your vendor.js file, you should have the following processes implemented:

// * Connect to the CSPS Socket Server
// * Every 5 seconds, a new customer order will be randomly generated. This order should have a store name, order id, customer name and address. Use the faker package to help generate random values.
// * When a new customer order is generated, create an object with key values event set to pickup and payload set to the customer order object.
// * Send this {event, payload} object to the CSPS Socket Server
// * Listen for the data event from the CSPS Socket Server. When you hear that event, look at the payload sent and parse it. If it has property event equal to delivered, then you should log a thank you message to the console. Ignore all other events.

//example logs
// Thank you for delivering order 1
// Thank you for delivering order 2
// Thank you for delivering order 3
// Thank you for delivering order 4

// - Time: 05/07/2020 1:30 PM
// - Store: My Flower Shop
// - OrderID: 1
// - Customer: Billy Biggs
// - Address: 123 Main Street, New York, NY

const net = require('net');
const socket = net.Socket();
const faker = require('faker');

socket.connect({ port: 3000, host: 'localhost'}, () => {
  console.log('**Connected to TCP Socket Server!**');
});

setInterval(() => {
  let newOrder = {
    time: faker.date.recent(),
    store: 'My Small Biz',
    orderID: faker.random.uuid(),
    customer: faker.name.firstName() + ' ' + faker.name.lastName(),
    address: faker.address.streetAddress(),
  }
  console.log('5 sec interval fire');
  //.write sends data connected server(server.js)
  socket.write(JSON.stringify({ event: 'pickup', content: newOrder}));
}, 5000);
