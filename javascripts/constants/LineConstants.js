var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
  CUSTOMER_LINE_ADD: null,       // Adds customer to line
  CUSTOMER_LINE_REMOVE: null,    // Remove customer from line
  CUSTOMER_ADD: null,       // Adds customer to line
  CUSTOMER_REMOVE: null,    // Remove customer from line  
  LINE_ADD: null,  			// Add a line
  LINE_REMOVE: null,   		// Remove a Line
  RECEIVE_DATA: null    	// Loads our mock data
});