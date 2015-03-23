var React = require('react');
var NavDrawer = require('./NavDrawer');
var NavHeader = require('./NavHeader');

var PilaNavbar = React.createClass({	
	getInitialState: function() {
		return {
			drawerIsOpen: false
		};
	},

	handleDrawerToggle: function(value) {
		this.setState({
			drawerIsOpen: value
		})
	},	

	render: function() {
		return (
			<div className="PilaNavbar">
				<NavDrawer data={this.props.data} DrawerState={this.state.drawerIsOpen} onDrawerToggle={this.handleDrawerToggle}/>
				<NavHeader onDrawerToggle={this.handleDrawerToggle} DrawerState={this.state.drawerIsOpen} activeUser={"User J User"} />
			</div>
		);
	}
});

module.exports = PilaNavbar;
