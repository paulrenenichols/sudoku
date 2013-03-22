
var functionalObject = function(initArg1, initArg2) {
	
	
	/*
	 * private variables.  
	 * The variable "_that" will be returned by this function
	 * and will act as the "constructed" object
	 */
	var _that = {};  //initialize to empty object
	var _private1 = initArg1;
	var _private2 = initArg2;
	
	/*
	 * Public and Private methods can be defined here
	 */
	var getP1 = function() { return _private1; };
	var getP2 = function() { return _private2; };
	
	/*
	 * making methods public involves assigning them to
	 * the "_that" variable as properties before we return it
	 */
	_that.getP1 = getP1;
	_that.getP2 = getP2;
	
	return _that;
};

var myFO = functionalObject(1, 2);
var number1 = myFO.getP1();