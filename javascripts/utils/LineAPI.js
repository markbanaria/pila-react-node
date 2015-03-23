var LineActions = require('../actions/LineActions');

module.exports = {

  // Load mock line data from localStorage into ProductStore via Action
  getLineData: function() {
    var data = JSON.parse(localStorage.getItem('Lines'));
    LineActions.receiveLines(data);
  }

};