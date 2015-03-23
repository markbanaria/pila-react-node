var React = require("react");
var ReactTransitionGroup = React.addons.TransitionGroup;
var Velocity = require("velocity-animate");

var CollapseContent = React.createClass({
  componentWillEnter: function(callback){
    var element = this.getDOMNode();
    Velocity(element, "slideDown", {duration: 200, complete: callback});
  },
  componentWillLeave: function(callback){
    var element = this.getDOMNode();
    Velocity(element, "slideUp", {duration: 200, complete: callback});
  },
  render: function(){
    return <div>{this.props.children}</div>
  }
});

var Collapse = React.createClass({
  propTypes: {
    opened: React.PropTypes.bool
  },
  getDefaultProps: function() {
    return {
      opened: false
    };
  },
  render: function() {
    var content = this.props.opened ?
      <CollapseContent>
        { this.props.children }
      </CollapseContent>
    : null;
    return (
      <ReactTransitionGroup className="Collapse" component="div">
        { content }
      </ReactTransitionGroup>
    );
  }
});

module.exports = Collapse;