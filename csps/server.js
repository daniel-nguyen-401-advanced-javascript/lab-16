'use strict';

const sio = require('socket.io');
const server = sio(3000);

// This application will be your server, allowing client applications to connect to it. Within the application’s server.js file, you should do the following:

// *X Check for connections to the csps namespace
// *X On connections, it should log out the current socket id
// *X It should allow sockets to emit a join event that will tell the server to put this socket into a specified room
// *X It should log out every event it receives from connected sockets, as shown in the sample console output above
// *X It should broadcast in-transit and delivered events to the vendor sockets in the appropriate room
const csps = server.of('/csps');

csps.on('connection', (socket) => {
 
  console.log('**CSPS Namespace connect from', socket.id, '**');

  
  //handle incoming data from connections
  socket.on('pickup', (payload) => {
    socket.join(`${payload.store}`);
    console.log('socket', socket.id, 'joined room', payload.store);
    csps.to(`${payload.store}`).emit('secret room', payload);
    console.log('Pickup', payload);
    csps.emit('pickup-heard', payload);
  })

  socket.on('in-transit', (payload) => {
    console.log('In-transit order', payload.orderID);
    csps.emit('in-transit-heard', payload);
  })

  socket.on('delivered', (payload) => {
    console.log('Delivered order', payload.orderID);
    csps.emit('delivered-heard', payload);
  })

});