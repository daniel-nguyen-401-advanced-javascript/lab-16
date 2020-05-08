'use strict';

const globalEmitter = require('./events.js');
const faker = require('faker');


//create order event
setInterval(() => { 
  //create order data
  let time = faker.date.future();
  let store = faker.company.companyName();
  let orderNum = faker.random.number();
  let customer = faker.name.firstName() + ' ' + faker.name.lastName();
  let address = faker.address.streetAddress();

  globalEmitter.emit('pickup', { time, store, orderNum, customer, address});
}, 5000);

const tyHandler = (payload) => {
  console.log('VENDOR says: Thank you for delivering order', payload.orderNum);
  console.log('EVENT delivered order', payload.orderNum);
};

globalEmitter.on('delivered', tyHandler);


module.exports = {tyHandler};