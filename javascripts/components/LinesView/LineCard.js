var React = require('react');
var DropDown = require('../common/DropDown');
var IconButton = require('../common/IconButton');
var LineActions = require('../../actions/LineActions');

var LineCard = React.createClass({
	handleUnqueueCustomer: function(e) {
		var CustomerId = event.target.data;
		var LineId = this.props.LineId;

		console.log("Unqueueing");

		LineActions.removeCustomerfromLine(LineId, CustomerId);
	},

	handleRemoveLine: function(e) {
		var LineName = this.props.title;

		LineActions.removeLine(LineName);
	},

	render: function() {
		var activeCustomer = "";
		if (this.props.customers[0]) {activeCustomer = this.props.customers[0].name}
		else {activeCustomer = "No customers in queue"}
		this.props.customers.shift()

		//generates customers in queue
		var customers = []
		this.props.customers.forEach(function(item) {
			customers.push(
				<li className="customer-list-item" key={item.id} >
					<IconButton className="RemoveCustomer" IconClass="fa fa-times" onButtonAction={this.handleUnqueueCustomer} />
					<a>{item.name}</a>
					<IconButton ButtonName="message" IconClass="fa fa-comment" />
					<IconButton ButtonName="movetofront" IconClass="fa fa-mail-forward" />
				</li>
			)	
		});

		return (
			<div className="LineCard">
				<div className="LineDetails">
					<h2 className="LineTitle">{this.props.title + this.props.lineId}</h2>

					<div className="ActiveCustomerBox">
						<h3 className="NowServing">Now Serving</h3>
						<h1 className="ActiveCustomer">{activeCustomer}</h1>
					</div>

					<div className="LineCardSettings IconButtonSet">
						<IconButton ButtonName="Settings" IconClass="fa fa-gear" />
						<IconButton ButtonName="Close" IconClass="fa fa-times" onButtonAction={this.handleRemoveLine} />
					</div>
				</div>

				<DropDown 
					dropdownname={customers.length + " customers in queue"} 
					menutype="accordion" 
					contentBefore={
						<IconButton 
							ButtonName="addCustomer" 
							IconClass="fa fa-plus"
							className="AddCustomer" 
							onButtonAction={this.addCustomer} />} 
					contentAfter={
						<IconButton 
							ButtonName="viewCustomers" 
							IconClass="fa fa-users"
							className="viewCustomers" />} 
					className="CustomersInLine">
					{customers}
				</DropDown>
			</div>
		);
	}
});

module.exports = LineCard;
