var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var LineConstants = require('../constants/LineConstants');
var _ = require('underscore');

// Define initial data points
var _lines = []

// Method to load product data from mock API
function loadLineData(data) {
  _lines = data[0].lines;
}

function addLine(name) {
  var LineId = 0;

  for (i=0; i<_lines.length-2; i++) {
    if (_lines[i + 1].id - _lines[i].id > 1) {
      LineId = _lines[i].id + 1;
    }  
  }

  if (LineId==0&&_lines.length>1) {
    LineId = _lines.length + 1;
  }

  _lines.push(
    {
      "name": name,
      "customers": [],
      "id": LineId
    }
  )
}

function addCustomerToLine(lineId, customerId) {
  var LineIdIndex = -1;

  _lines.forEach(function(item) {
    if (lineId = item.id) {
      LineIdIndex = _lines.indexOf(item);
    }
  }) 

  _lines[LineIdIndex].customers.push(customerId);
}

function removeLine(name) {
  var LineItem = {};

  _lines.forEach(function(item) {
    if (item.name == name) {
      LineItem = item
    }
  });

  var index = _lines.indexOf(LineItem);

  _lines.splice(index, 1);
}

function removeCustomerFromLine(lineId, customerId) {
  var lineIndex = 0;
  var customerIndex = 0;

  _lines.map(function(line) {
    if(line.id == lineId) {
      lineIndex = line.id - 1;
    }
  });

  customerIndex = _lines[lineIndex].customers.indexOf(customerId);
  _lines[lineIndex].customers.splice(customerIndex, 1);

}

// Extend LineStore with EventEmitter to add eventing capabilities
var LineStore = _.extend({}, EventEmitter.prototype, {

  // Return Line data
  getLines: function() {
    return _lines;
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

    // Respond to LINE_ADD action
    case LineConstants.LINE_ADD:
      addLine(action.name);
      break;

    // Respond to CUSTOMER_LINE_ADD action
    case LineConstants.CUSTOMER_LINE_ADD:
      addCustomerToLine(action.lineId, action.customerId);
      break;

    // Respond to LINE_REMOVE action
    case LineConstants.LINE_REMOVE:
      removeLine(action.name);
      break;

    // Respond to CUSTOMER_LINE_REMOVE action
    case LineConstants.CUSTOMER_LINE_REMOVE:
      removeCustomerFromLine(action.lineId, action.customerId);
      break;        

    default:
      return true;
  }

  // If action was responded to, emit change event
  LineStore.emitChange();

  return true;

});

module.exports = LineStore;