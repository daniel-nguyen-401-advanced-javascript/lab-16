'use strict';

const globalEmitter = require('./events.js');

function pickupHandler(payload) {
  console.log('DRIVER picked up order', payload.orderNum);
  console.log('EVENT in-transit order', payload.orderNum);
  globalEmitter.emit('in-transit', payload);
}

function transitHandler(payload) {
  setTimeout(() => {
    console.log('DRIVER delivered order', payload.orderNum);
    globalEmitter.emit('delivered', payload);
  }, 3000);
}

globalEmitter.on('pickup', pickupHandler);
globalEmitter.on('in-transit', transitHandler);

module.exports = { pickupHandler, transitHandler};