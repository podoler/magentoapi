// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to manage categories and how products are assigned to categories.
*/
function AdvancedInventory() {
  this.prefix = 'advancedinventory.';
}
util.inherits(AdvancedInventory, events.EventEmitter);


// prototypes we will be applying
var protos = {
    setMultistock: {
      mandatory: 'product_id,status'
    },

    getWh: {
        optional: 'view'
    },

    getData: {
        mandatory: 'product_id,warehouse_id'
    },

    setData: {
        mandatory: 'product_id,warehouse_id,data'
    }
};

// creating prototypes using curry func
for (var key in protos) {
    AdvancedInventory.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = AdvancedInventory;
