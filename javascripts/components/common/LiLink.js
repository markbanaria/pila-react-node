var React = require('react');

var LiLink = React.createClass({
	render: function() {
		return (
			<div className="LiLink">
				<li className={this.props.className}>
					<a href={this.props.link}>
						{this.props.name}
					</a>
				</li>
			</div>
		);
	}
});

module.exports = LiLink;