var AppDispatcher = require('../dispatcher/AppDispatcher');
var LineConstants = require('../constants/LineConstants');

// Define actions object
var LineActions = {

  // Receive inital product data
  receiveLines: function(data) {
    AppDispatcher.handleAction({
      actionType: LineConstants.RECEIVE_DATA,
      data: data
    })
  },

  // Add a new line
  addLine: function(name) {
    AppDispatcher.handleAction({
      actionType: LineConstants.LINE_ADD,
      name: name
    })
  },

  addCustomer: function(name) {
    AppDispatcher.handleAction({
      actionType: LineConstants.CUSTOMER_ADD,
      name: name
    })
  },  

  // Add customer to line
  addCustomerToLine: function(lineId, customerId) {
    AppDispatcher.handleAction({
      actionType: LineConstants.CUSTOMER_LINE_ADD,
      lineId: lineId,
      customerId: customerId
    })
  },

  // Remove a line
  removeLine: function(name) {
    AppDispatcher.handleAction({
      actionType: LineConstants.LINE_REMOVE,
      name: name
    })
  },  

  removeCustomer: function(id) {
    AppDispatcher.handleAction({
      actionType: LineConstants.CUSTOMER_REMOVE,
      id: id
    })
  },   

  // Remove customer from line
  removeCustomerFromLine: function(customerId, lineId) {
    AppDispatcher.handleAction({
      actionType: LineConstants.CUSTOMER_LINE_REMOVE,
      customerId: customerId,
      lineId: lineId
    })
  }

};

module.exports = LineActions;