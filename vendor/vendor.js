'use strict';

const sioc = require('socket.io-client');
const socket = sioc.connect('http://localhost:3000/csps');
// may need roomname at the end of localhost
const faker = require('faker');


// Your vendor application will act as a socket client to the CSPS server. In your vendor.js file, you should have the following processes implemented:

// *X Connect to the CSPS server, in the csps namespace
// * Emit a join event, with the store name (which will be used as the room name) as the event payload
// *X Every 5 seconds, a new customer order will be randomly generated. This order should have a store name, order id, customer name and address. Use the faker package to help generate random values.
// *X When a new customer order is generated, emit a pickup event, with the generated order as the payload
// *X Listen for the delivered event from the CSPS server. When you hear that event, look at the payload sent and log a thank you message to the console with the order ID


//// refactor to use rooms
setInterval(() => {
  let newOrder = {
    time: faker.date.recent(),
    store: faker.company.companyName(),
    orderID: faker.random.uuid(),
    customer: faker.name.firstName() + ' ' + faker.name.lastName(),
    address: faker.address.streetAddress(),
  }
  // console.log('5 sec interval fire');
  //.write sends data connected server(server.js)
  // socket.write(JSON.stringify({ event: 'pickup', content: newOrder}));
  // console.log('making new order (5sec)', newOrder.orderID);
  socket.emit('pickup', newOrder);
}, 5000);

//refactor to not listen to data
socket.on('delivered-heard', (payload) => {
  console.log('Thank you for delivering order', payload.orderID);
})
