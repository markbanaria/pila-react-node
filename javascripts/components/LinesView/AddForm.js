var React = require('react');
var LineActions = require('../../actions/LineActions');
require("jquery");

var AddForm = React.createClass({
	handleAddLine: function(event) {
		event.preventDefault();
		var NewLineName = this.refs.LineName.getDOMNode().value.trim();

		this.props.data.lines.forEach(function(item) {
			if (item.name == NewLineName) {
				NewLineName = NewLineName + " copy" 
			}
		});

		LineActions.addLine(NewLineName);
	},

	handleQueueCustomer: function(event) {
		event.preventDefault();

		var LineName = this.refs.QueueToLineName.getDOMNode().value;
		var Customer = this.refs.CustomerName.getDOMNode().value.trim();

		var CustomerId = -1;

		this.props.data.customers.forEach(function(item) {
			if (item.name == Customer) {
				CustomerId = item.id;
			}
		});

		if (CustomerId == -1) {
			LineActions.addCustomer(Customer);
			CustomerId = this.props.data.customers.length;
		}

		var LineId = -1;

		this.props.data.lines.forEach(function(item) {
			if (item.name == LineName) {
				LineId = item.id;
			}
		});

		console.log(CustomerId);

		LineActions.addCustomerToLine(LineId, CustomerId);
	},

	render: function() {
		var lines = [];

		this.props.data.lines.forEach(function(item) {
			lines.push(
				<option key={item.id} >{item.name}</option>
			);
		});

		return (
			<div className="AddForm">
				<form className="AddLineForm" onSubmit={this.handleAddLine}>
					<h3>Add Line</h3>
					<label>Line Name</label>
					<input type="text" ref="LineName"/>
					<input type="submit"></input>						
				</form>
							
				<form className="QueueCustomerForm" onSubmit={this.handleQueueCustomer}>
					<h3>Queue Customer</h3>
					<label>Customer Name</label>
					<input type="text" ref="CustomerName" />
					<select ref="QueueToLineName">
						{lines}
					</select>
					<input type="submit"></input>	
				</form>	
						
			</div>
		);
	}

});

module.exports = AddForm;