'use strict';

// This application will act as your TCP Socket Server, allowing other applications to connect to this server. Within the application’s server.js file, you should create a pool of connected sockets and read incoming data from a single socket, broadcasting that information back to all connected sockets.

// When your server reads inbound data from a connected socket, it should

// * Verify that the data is legitimate
// * Is it JSON
// * Does it have an event and payload key-value pair?

// Then, when the server “broadcasts” to its connected sockets, it should send the same event and payload key value pair it received to all sockets in the pool. It should also then console log out the current time and the name of the event received, as well as some subset of data from the payload.

// example logs
// pickup
// - Time: 05/07/2020 1:30 PM
// - Store: My Flower Shop
// - OrderID: 1
// - Customer: Billy Biggs
// - Address: 123 Main Street, New York, NY
// in-transit order 1
// delivered order 1
// pickup
// - Time: 05/07/2020 1:32 PM
// - Store: My Flower Shop
// - OrderID: 2
// - Customer: Sarah Smalls
// - Address: 234 Grand Street, New York, NY
// in-transit order 2
// delivered order 2

const net = require('net');
const server = net.createServer();

let socketPool = [];
let port = 3000;

//start server
server.listen(port, () => {
  console.log('Server up and running on port', port);
});

server.on('connection', (socket) => {
  //log console log on new connection
  socketPool.push(socket);
  console.log('**Inbound connect from', socket.address(), '**');
  
  //handle incoming data from connections
  socket.on('data', (payload) => {
    let parsedPayload = JSON.parse(Buffer.from(payload).toString());
    
    //parsing works, sending out data doesn't work
    if (parsedPayload.event === 'pickup') {
      console.log(parsedPayload);

      let driverSocket = socketPool[1];
      driverSocket.write(JSON.stringify({ event: 'pickup', content: parsedPayload.content}));
    }

    if (parsedPayload.event === 'in-transit') {
      console.log('In-Transit order', parsedPayload.content.orderID);
    }

    if (parsedPayload.event === 'delivered') {
      console.log('Delivered order', parsedPayload.content.orderID);
      let vendorSocket = socketPool[0];
      vendorSocket.write(JSON.stringify({ event: 'delivered', content: parsedPayload.content}));
    }
  })

});