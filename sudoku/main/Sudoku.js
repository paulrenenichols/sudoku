/**
 * Provides all functionality necessary for running an html5
 * canvas based game in a web browser.
 * 
 * @module Sudoku
 */
var Sudoku = {};

/**
 * This function constructs a sudokuInterface object.
 * A sudokuInterfaceObject animates a Sudoku game in an html5 canvas.
 * This constructor takes a width parameter that represents the desired
 * width and height of the canvas element that will be animated on.
 * 
 * This constructor uses the 'functional' constructor pattern
 * found in "JavaScript: The Good Parts" by Douglas Crockford
 * that avoids the use of the 'new' operator and the 'prototype'
 * property.
 * 
 * The final width and height of the canvas will be less than
 * or equal to the specified width parameter, and it will be no
 * smaller than a minimum size.  Because of the minimum tile width
 * and minimum divider width, the constructor may not be able
 * to construct a canvas with the exact specified width.
 * 
 * Since the sudoku game board consists of 10 dividers in each dimension
 * and 9 tiles in each dimension, the width of the sudoku board can
 * be calculated the following way: canvasWidth = (10 * dividerWidth) + (9 * tileWidth).
 * 
 * 
 * @class sudokuInterface
 * @constructor 
 * @param {Number} width The desired width and height of the canvas
 * @return {Object} A sudokuInterface object
 */
Sudoku.sudokuInterface = function(width, minimumTileWidth, minimumDividerWidth) {
	
	//Private
	//
	var _that = {};
	var _canvas;
	
	var _defaultMinimumTileWidth = 10;
	var _defaultMinimumDividerWidth = 1;
	
	var _minimumTileWidth;
	var _minimumDividerWidth;
	
	var _countOfTiles = 9;
	var _countOfDividers = 10;
	
	var _minimumWidth; 
	var _minimumWidthMultiplier;
	
	var _tileWidth;
	var _dividerWidth;
	var _width;
	
	var _error;
	
	function getError() {
		return _error;
	};

	function isPositiveInteger(number) {
		if ( !isNaN(number) && ( typeof number === 'number') && 
				(number > 0) && (number === Math.floor(number)) ) {
			
			return true;
		}
		else {
			return false;
		}
	};
	
	function isUndefined(value) {
		if (typeof value === 'undefined') {
			return true;
		}
		else {
			return false;
		}
	};
	
	function setMinimumTileWidth(minimumTileWidth) {
		
		_error = false;
		if ( !isPositiveInteger(minimumTileWidth) ) {
			_error = 'setMinimumTileWidth: parameter is not a positive integer';
		}
		else {
			_minimumTileWidth = minimumTileWidth;
		}
		
		return _error;
	};

	function getMinimumTileWidth() {
		return _minimumTileWidth;
	};
	
	function setMinimumDividerWidth(minimumDividerWidth) {
		_error = false;
		if ( !isPositiveInteger(minimumDividerWidth) ) {
			_error = 'setMinimumDividerWidth: parameter is not a positive integer';
		}
		else {
			 _minimumDividerWidth = minimumDividerWidth;
		}
		
		return _error;
	};
	
	function getMinimumDividerWidth() {
		return _minimumDividerWidth;
	};
	
	function geDefaulttMinimumTileWidth() {
		return _defaultMinimumTileWidth;
	};
	
	function getDefaultMinimumDividerWidth() {
		return _defaultMinimumDividerWidth;
	};
	
	function getTileWidth() {
		return _tileWidth;
	};
	
	function calculateTileWidth(width) {
		
		return getMinimumTileWidth() * getMinimumWidthMultiplier();
	};
	
	function getDividerWidth() {
		return _dividerWidth;
	};
	
	function calculateDividerWidth(width) {
		return getMinimumDividerWidth() * getMinimumWidthMultiplier();
	};
	
	function getMinimumWidth() {
		return _minimumWidth;
	};
	
	/**
	 * This function calculates and returns the minimum interface width
	 * 
	 * @param minimumTileWidth {Number}
	 * @param minimumDividerWidth {Number}
	 * @returns {Number} The minimum width that the interface can have.
	 */
	function calculateMinimumWidth(minimumTileWidth, minimumDividerWidth) {
		if( isPositiveInteger(minimumTileWidth) && isPositiveInteger(minimumDividerWidth) ) {
			return (minimumTileWidth * _countOfTiles) + (minimumDividerWidth * _countOfDividers);
		}
		else {
			return _minimumWidth;
		}
	};
	
	/**
	 * 
	 * The 'minimum width multiplier' is the ratio of the
	 *   proposed interface width to the minimum interface
	 *   width.
	 * If this ratio is 1, the minimumWidth is used.
	 * If this ratio is greater, then we are going to have
	 *   a larger interface width.
	 *   
	 * @param width {Number} The proposed interface width
	 * @returns {Number} A size multiplier that defines the 
	 * width of the interface as multiplier * _minimumWidth
	 */
	function calculateMinimumWidthMultiplier(width) {
		
		return Math.floor( width / _minimumWidth );
	};
	
	/**
	 * 
	 * @returns
	 */
	function getMinimumWidthMultiplier() {
		return _minimumWidthMultiplier;
	};
	

	function calculateWidth(width) {
		return (_countOfDividers * getDividerWidth(width)) + (_countOfTiles * getTileWidth(width));
	};
	
	function getWidth() {
		return _width;
	};
	
	/**
	 * The init function constructs all of stored values in the object
	 * based on the width, minimumTileWidth, and minimumDividerWidth
	 * parameters.
	 * 
	 * This function requires that _width > _minimumWidth and that all 
	 * parameters must be positive integers or the width must be 
	 * positive and the other two must be undefined.
	 * 
	 * If these conditions are not satisfied, and error is returned
	 * and the private _error variable is set.
	 * 
	 * @param width {Number} Positive integer representing desired with of interface
	 * @param minimumTileWidth {Number} Optional positive integer representing minimum tile width 
	 * @param minimumDividerWidth {Number} Optional positive integer representing minimum divider width
	 * @returns Error string that may be false, indicating no error
	 */
	function init(width, minimumTileWidth, minimumDividerWidth) {

		_error = false;
		
		if ( isPositiveInteger(width) && isPositiveInteger(minimumTileWidth) && isPositiveInteger(minimumDividerWidth) ) {		
			_minimumTileWidth = minimumTileWidth;
			_minimumDividerWidth = minimumDividerWidth;
			_minimumWidth = calculateMinimumWidth(minimumTileWidth, minimumDividerWidth);
			_minimumWidthMultiplier = calculateMinimumWidthMultiplier(width);
			_width = calculateWidth();
			_tileWidth = calculateTileWidth();
			_dividerWidth = calculateDividerWidth();
			
			if (_width < _minimumWidth ) {
				_error = 'Construction error: Provided width is insufficient';
			}
		}
		else if ( isPositiveInteger(width) && 
				isUndefined(minimumTileWidth) && isUndefined(minimumDividerWidth) ) {
			_minimumTileWidth = _defaultMinimumTileWidth;
			_minimumDividerWidth = _defaultMinimumDividerWidth;
			_minimumWidth = calculateMinimumWidth();
			_minimumWidthMultiplier = calculateMinimumWidthMultiplier(width);
			_width = calculateWidth();
			_tileWidth = calculateTileWidth();
			_dividerWidth = calculateDividerWidth();
			
			if (_width < _minimumWidth ) {
				_error = 'Construction error: Provided width is insufficient';
			}
		}
		else {
			_error = 'Construction error: Either no valid parameters were provided, or a mix of valid, invalid, and undefined parameters were given';
		}
		
		return _error;
	};
	
	/**
	 * Resize the canvas to the next biggest size that is less
	 * than or equal to width
	 * 
	 * @param width {Number} Proposed width for resize operation 
	 * @returns Error string that may be false.  False indicates success.
	 */
	function resize(width) {
		
		_error = false;
		
		if ( isPositiveInteger(width) ) {
			_minimumWidth = calculateMinimumWidth();
			_minimumWidthMultiplier = calculateMinimumWidthMultiplier(width);
			_width = calculateWidth();
			_tileWidth = calculateTileWidth();
			_dividerWidth = calculateDividerWidth();
			
			if (_width < _minimumWidth ) {
				_error = 'resize: Provided width is too small';
			}
		}
		else {
			_error = 'resize: width parameter provided is not a positive integer';
		}
		
		return _error;
	};
	
	//PUBLIC
	//
	_that.resize = resize;
	_that.getWidth = getWidth;
	_that.getError = getError;
	
	/**
	 * Initialize the size of the interface before returning it.
	 */
	init(width, minimumTileWidth, minimumDividerWidth);
	
	return _that;
};
