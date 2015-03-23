var React = require('react');
var LineData = require('./LineData');
var LineAPI = require('./utils/LineAPI')
var MainView = require('./MainView');

// Load Mock Line Data into localStorage
LineData.init();

// Load Mock API Call
LineAPI.getLineData();

// Render MainView Controller View
React.render(
  <MainView />,
  document.getElementById('content')
);