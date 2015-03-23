var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var LineConstants = require('../constants/LineConstants');
var _ = require('underscore');

// Define initial data points
var _customers = {}

// Method to load product data from mock API
function loadLineData(data) {
  _customers = data[0].customers;
}

function addCustomer(name) {
  _customers.push(
    {
      "name": name,
      "id": _customers.length + 1
    }
  )
}

function removeCustomer(customerId) {
  var index = 0;

  _customers.map(function(customer) {
    if (customer.id == customerId) {
      index = customer.id;
    }
  });

  _customers.splice(index, 1);
}

// Extend LineStore with EventEmitter to add eventing capabilities
var CustomerStore = _.extend({}, EventEmitter.prototype, {

  // Return Line data
  getCustomers: function() {
    return _customers;
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    // Respond to RECEIVE_DATA action
    case LineConstants.RECEIVE_DATA:
      loadLineData(action.data);
      break;

    // Respond to CUSTOMER_ADD action
    case LineConstants.CUSTOMER_ADD:
      addCustomer(action.name);
      break;

    // Respond to LINE_ADD action
    case LineConstants.CUSTOMER_REMOVE:
      removeCustomer(action.id);
      break;        

    default:
      return true;
  }

  // If action was responded to, emit change event
  CustomerStore.emitChange();

  return true;

});

module.exports = CustomerStore;