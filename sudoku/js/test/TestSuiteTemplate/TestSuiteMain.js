
require.config({
	baseURL: '/',
	
	paths: {
		sudoku: '../../sudoku/Sudoku',
		utility: '../../utility/utility',
		jquery: '../../lib/jquery-1.9.1.min',
		json2: '../../lib/json2',
		modernizr: '../../lib/modernizr-2.6.2.min',
		underscore: '../../lib/underscore-min',
		qunit: '../qunit-1.11.0'

	}
});

define(['jquery', 'underscore', 'qunit', 'utility'], 
function($, _, qunit) {

	$(document).ready( function() {
	    	 
	    console.log("about to conduct a test");
	    module("Module");
	    test("Perform a test", function() {
	    	
	    	ok(true, "True is true");
	    	       	
	    });
	    console.log("after test");
	
	    window.QUnit.start();
	});

});