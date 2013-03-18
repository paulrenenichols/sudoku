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
	
	function getMinimumTileWidth() {
		return _minimumTileWidth;
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
	 * @param {Number} width The proposed interface width
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
	
	function resize(width, minimumTileWidth, minimumDividerWidth) {
		
		var resizeSucceeded = true;
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
				_error = 'Provided width is insufficient';
				resizeSucceeded = false;
			}
		}
		else if ( isPositiveInteger(width) ) {
			_minimumTileWidth = _defaultMinimumTileWidth;
			_minimumDividerWidth = _defaultMinimumDividerWidth;
			_minimumWidth = calculateMinimumWidth();
			_minimumWidthMultiplier = calculateMinimumWidthMultiplier(width);
			_width = calculateWidth();
			_tileWidth = calculateTileWidth();
			_dividerWidth = calculateDividerWidth();
			
			if (_width < _minimumWidth ) {
				_error = 'Provided width is insufficient';
				resizeSucceeded = false;
			}
		}
		else {
			_error = 'No valid arguments provided to resize: must at least provide positive integer for suggested width';
			resizeSucceeded = false;
		}
		
		return resizeSucceeded;
	};
	
	//PUBLIC
	//
	_that.resize = resize;
	_that.getWidth = getWidth;
	_that.getError = getError;
	
	/**
	 * Initialize the size of the interface before returning it.
	 */
	if (!_that.resize(width, minimumTileWidth, minimumDividerWidth)) {
		if ( !isPositiveInteger(width) && !isPositiveInteger(minimumTileWidth) 
				&& !isPositiveInteger(minimumDividerWidth) ) {
			
			_error = 'No valid parameters provided to constructor';
		}
		else if ( !isPositiveInteger(width) ) {
			_error = 'Width parameter is not a positive integer';
		}
	}
	
	return _that;
};
