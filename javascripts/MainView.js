var React = require('react');
var LinesView = require('./components/LinesView/LinesView');
var PilaNavbar = require('./components/Navbar/PilaNavbar');
var CustomerStore = require('./stores/CustomerStore');
var LineStore = require('./stores/LineStore');

function getLineState() {
	return {
			data: {
			customers: CustomerStore.getCustomers(),
			lines: LineStore.getLines()				
		}
	};
}

var MainView = React.createClass({
	getInitialState: function() {
		return getLineState();
	},

	// Add change listeners to stores
	componentDidMount: function() {
		LineStore.addChangeListener(this._onChange);
		CustomerStore.addChangeListener(this._onChange);
	},

	// Remove change listers from stores
	componentWillUnmount: function() {
		LineStore.removeChangeListener(this._onChange);
		CustomerStore.removeChangeListener(this._onChange);
	},

	render: function() {
		return(
			<div className="MainView">
				<PilaNavbar data={this.state.data} />
				<LinesView data={this.state.data} />
			</div>	
		);
	},

	// Method to setState based upon Store changes
	_onChange: function() {
		this.setState(getLineState());
	}

});

module.exports = MainView;

