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