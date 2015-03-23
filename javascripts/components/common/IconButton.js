var React = require('react');

var IconButton = React.createClass({
	render: function() {
		return (
			<div className={"IconButton " + this.props.className}>
				<div onClick={this.props.onButtonAction}>
					<i className={this.props.IconClass}></i>
				</div>
			</div>	
		);
	}
});

module.exports = IconButton;