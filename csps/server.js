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