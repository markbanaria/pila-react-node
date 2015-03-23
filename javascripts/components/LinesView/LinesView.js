var React = require('react');
var LinesList = require('./LinesList');
var AddForm = require('./AddForm');

var LinesView = React.createClass({

	render: function() {
		return (
			<div className="LinesView">
				<LinesList linesdata={this.props.data} />
				<AddForm data={this.props.data} />
			</div>
		);
	}
});

module.exports = LinesView;
