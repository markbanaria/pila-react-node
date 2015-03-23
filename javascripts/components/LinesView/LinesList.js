var React = require('react');
var LineCard = require('./LineCard');
var IconButton = require('../common/IconButton');

var LinesList = React.createClass({
	handleAddLine: function(event) {
		
	},

	render: function() {
		var lines = [];

		var customersdata = this.props.linesdata.customers;

		this.props.linesdata.lines.forEach(function(line) {
			var customersInLine = []

			line.customers.forEach(function(id) {
				var customerName = "";

				customersdata.forEach(function(item) {
					if (item.id == id) {
						var customerIndex = customersdata.indexOf(item);
						customerName = customersdata[customerIndex].name;
					}
 				});

				id<=0 
					? customersInLine.push("null") 
					: customersInLine.push(
						{
							name: customerName,
							id: id
						}	

					);
			});

			lines.push(
				<LineCard title={line.name} customers={customersInLine} key={line.name} lineId={line.id} />
			);
		});

		return (
			<div className="LinesList">
				{lines}
				<IconButton IconClass="fa fa-plus-circle" className="AddLine" onButtonAction={this.handleAddLine} />				
			</div>			
		);
	}
});

module.exports = LinesList;

