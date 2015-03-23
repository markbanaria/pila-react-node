module.exports = {

	ToggleShow: function(condition) {
		var styleName = {};
		if (condition) {styleName = {display: "none"}}
		else {styleName = {display: "block"}}
		return (
			styleName
		)					
	},

	ToggleSlide: function(condition, width) {
		var styleName = {};
		if (condition) {styleName = {left: (-1 * width)}}
		else {styleName = {left: 0}}
		return (
			styleName
		)					
	}

}			
