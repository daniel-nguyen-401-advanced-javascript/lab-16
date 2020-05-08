'use strict';

const globalEmitter = require('../lib/events.js');
const driver = require('../lib/driver.js');
const pickupHandler = driver.pickupHandler;
const transitHandler = driver.transitHandler;
const vendor = require('../lib/vendor.js');
const tyHandler = vendor.tyHandler;

let consoleSpy = jest.spyOn(console, 'log');

describe('test the Pickup handler function independently', () => {
    it('pickup handler works', () => {
        consoleSpy.mockClear();

        let payload = {
          time: 'now',
          store:'store',
          orderNum: 2,
          customer: 'customer',
          address: 'address',
        };

        pickupHandler(payload);
        expect(consoleSpy).toHaveBeenCalled();
    });
});

describe('test the transit handler function independently', () => {
  it('transit handler works', () => {
      consoleSpy.mockClear();

      let payload = {
        time: 'now',
        store:'store',
        orderNum: 2,
        customer: 'customer',
        address: 'address',
      };

      transitHandler(payload);
      setTimeout(() => {

        expect(consoleSpy).toHaveBeenCalledWith('DRIVER picked up order 2');
      }, 3000);
  });
});

describe('test the thank you handler function independently', () => {
  it('thank you handler works', () => {
      consoleSpy.mockClear();

      let payload = {
        time: 'now',
        store:'store',
        orderNum: 2,
        customer: 'customer',
        address: 'address',
      };

      tyHandler(payload);
      setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalled();
      }, 3000);
  });
});