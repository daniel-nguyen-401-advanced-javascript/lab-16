# Socket.io
    
Your application must be able to support multiple users on different machines communicating with one another. Because of this, we’re going to be making three distinct applications, and have them all communicate over the internet. These applications will together simulate the order and delivery of an item, from seller to customer. The seller (or vendor) should alert the system that a package needs to be delivered, and a delivery driver should alert the system when a package is picked up for delivery. The driver should also alert the system when the package has been delivered. Thus, you should have three major events being communicated:

* `pickup` - Tells the system when a new order needs to be delivered
* `in-transit` - Tells the system which order is in the process of being delivered
* `delivered` - Tells the system when the order has been delivered
Your vendor application should automatically generate random orders every 5 seconds. These random orders should have a store, id, customer, and address as the order data.
    
## Links
    
- [pull request](https://github.com/daniel-nguyen-401-advanced-javascript/lab-16/pull/2)
    
## Challenge
    
Create three events, `pickup`, `in-transit`, and `delivered`.

Your application should automatically generate random orders every 5 seconds. These random orders should have a store, id, customer, and address as the order data.
    
## Testing Instructions
    
- open 3 terminal windows
* window 1 should be `csps/server.js`
* window 2 should be `driver/driver.js`
* window 3 should be `vendor/vendor.js`
- run `npm start`, in order, on `csps`, then `driver`, then `vendor`
- that should get your logs going properly

## UML
![lab-16-uml](/lab-16-uml.jpg)
