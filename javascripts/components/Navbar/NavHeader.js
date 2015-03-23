var React = require('react');
var MenuButton = require('../common/MenuButton');
var IconButton = require('../common/IconButton');

var NavHeader = React.createClass({
	menuAction: function() {
		this.props.onDrawerToggle(!this.props.DrawerState);
	},

	render: function() {
		var DropDownTitle = (
			<div>
			<i className="fa fa-user UserIcon"></i>
			<span className="UserName">{this.props.activeUser}</span>
			</div>	
			);

		var icon = <i className="fa fa-plus" />

		return (
			<div className="NavHeader">
				<IconButton className="NavHeaderItems DrawerToggle" ButtonName="Menu2" onButtonAction={this.menuAction} IconClass="fa fa-bars" /> 
				<img className="PilaLogo NavHeaderItems" src="assets/logo-white.png"/>
				<div className="NavHeaderItems FillerContainer" />
				<MenuButton icon={DropDownTitle} className="NavHeaderItems UserOptions"> 
					<a href="!/profile">Profile</a>
					<a href="!/settings">Settings</a>						
					<a href="!/logout">Logout</a>
				</MenuButton>
			</div>
		);
	}
});

module.exports = NavHeader;