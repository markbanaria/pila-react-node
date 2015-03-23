var React = require('react');
var ToggleMethods = require('./ToggleMethods');

var DropDown = React.createClass({
	handleDropdown: function() {
		this.setState({visible: !this.state.visible});
	},

	getInitialState: function() {
		return {
			visible: false
		};
	},

	render: function() {
		dropdownStyle = ToggleMethods.ToggleShow((this.state.visible == false));
		
		this.props.menutype=="popup" ? mask=<div className={this.props.menutype + " dropdownmask"} onClick={this.handleDropdown} style={dropdownStyle} /> : mask = null

		return (
			<div className={"DropDown " + this.props.className} >
				<div className="dropdownToggleContainer">
					{this.props.contentBefore}

					<div onClick={this.handleDropdown} className="Toggle">
						{this.props.dropdownname}	
					</div>

					{this.props.contentAfter}						
				</div>

				<ul className={this.props.menutype + " dropdownoptions"} style={dropdownStyle}>
					{this.props.children}
				</ul>

				{mask}
			</div>
		);	
	}
});

module.exports = DropDown;

