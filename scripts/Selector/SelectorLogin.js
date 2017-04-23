var SelectorLogin = {

	canHaveChildSelectors: function () {
		return true;
	},

	_getData: function(parentElement) {
		console.log("SelectorLogin ",parentElement)
		return true;
	},
	
	getFeatures: function () {
		return ['usernameSelector','passwordSelector','fillUsername','fillPassword'];
	}
}