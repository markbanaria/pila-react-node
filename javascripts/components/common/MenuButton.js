var React = require("react/addons");
var Collapse = require("./Collapse");

var MenuButton = React.createClass({
  getInitialState: function() {
    return {
      opened: false
    };
  },
  componentDidMount: function() {
    document.addEventListener("click", this.documentClickHandler);
  },
  componentWillUnmount: function() {
    document.removeEventListener("click", this.documentClickHandler);
  },
  documentClickHandler: function(e) {
    if (!this.getDOMNode().contains(e.target)) {
      this.setState({opened: false})
    }
  },
  clickHandler: function(){
    this.setState({opened: !this.state.opened});
  },
  close: function(){
    this.setState({opened: false});
  },
  render: function() {
    var children = React.Children.map(this.props.children, function(child, index){
      if(!child) return;
      return React.addons.cloneWithProps(child, {
        onClick: function(){
          child.props.onClick();
          this.close();
        }.bind(this),
        key: index
      });
    }.bind(this));
    return (
      <div className={"MenuButton " + this.props.className}>
        <a className={"icon-button " + (this.state.opened ? "selected" : "") } onClick={ this.clickHandler }>
          {this.props.icon}
        </a>
        <Collapse opened={ this.state.opened }>
          <div className="triangle"></div>
          {children}
        </Collapse>
      </div>
    );
  }
});
module.exports = MenuButton;
