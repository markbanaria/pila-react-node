var React = require('react');
var LiLink = require('../common/LiLink');
var DropDown = require('../common/DropDown');
var ToggleMethods = require('../common/ToggleMethods');

var NavDrawer = React.createClass({

	handleMask: function() {
		this.props.onDrawerToggle(!this.props.DrawerState);
	},

	render: function() {
		MaskStyle = ToggleMethods.ToggleShow(this.props.DrawerState == false);
		DrawerStyle = ToggleMethods.ToggleSlide(this.props.DrawerState == false, 220);

		var lineslist = [];
		this.props.data.lines.forEach(function(line) {
			lineslist.push(<LiLink name={line.name} key={line.name} />);
		});

		var drawermask = <div className="dropdownmask" onClick={this.handleMask} style={MaskStyle} />

		return (
			<div className="NavDrawer">
				<div className="DrawerList" style={DrawerStyle} >
					<DropDown menutype="accordion" dropdownname="ActiveLines">
					{lineslist}
					</DropDown>
					<LiLink name="Settings" className="DrawerLink"/>
					<LiLink name="Customers" className="DrawerLink" />
				</div>	
				{drawermask}
			</div>
		);
	}	
});

module.exports = NavDrawer;