/**
 * Provides all functionality necessary for running an HTML5
 * canvas based Sudoku game in a web browser.
 * 
 * @module Sudoku
 */
var Sudoku = Sudoku ? Sudoku : {};

/**
 * Constructs a Sudoku Interface Object
 * 
 * @class sudokuInterface
 * @constructor 
 * @param canvas {Object} An HTML5 Canvas Element for drawing the interface
 * @param sudokuGame {Object} An object that stores Sudoku Game State
 * @return {Object} A sudokuInterface object
 */
Sudoku.sudokuInterface = function(canvas, sudokuGame) {
	
	var _that = {};
	
	var _tileWidth = 60;
	var _bigDividerWidth = 10;
	var _smallDividerWidth = 3;
	var _lineWidth = 598;
	
	var _drawingContext = canvas.getContext("2d");
	
	function drawHorizontalDividers() {
		
		var yCoordinate = 0;
		
		
		_drawingContext.fillStyle = "#000000";
		
		_drawingContext.fillRect(0, yCoordinate, _lineWidth - 1, _bigDividerWidth);
		yCoordinate += _bigDividerWidth + _tileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _lineWidth - 1, _smallDividerWidth);
		yCoordinate += _smallDividerWidth + _tileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _lineWidth - 1, _smallDividerWidth);
		yCoordinate += _smallDividerWidth + _tileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _lineWidth - 1, _bigDividerWidth);
		yCoordinate += _bigDividerWidth + _tileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _lineWidth - 1, _smallDividerWidth);
		yCoordinate += _smallDividerWidth + _tileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _lineWidth - 1, _smallDividerWidth);
		yCoordinate += _smallDividerWidth + _tileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _lineWidth - 1, _bigDividerWidth);
		yCoordinate += _bigDividerWidth + _tileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _lineWidth - 1, _smallDividerWidth);
		yCoordinate += _smallDividerWidth + _tileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _lineWidth - 1, _smallDividerWidth);
		yCoordinate += _smallDividerWidth + _tileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _lineWidth - 1, _bigDividerWidth);
	};
	
	function drawEmptyGameBoard() {
		
		//_drawingContext.setTransform(1,0,0,1,0,0);
		drawHorizontalDividers();
		
		_drawingContext.save();
		
		_drawingContext.rotate(Math.PI / 2);
		_drawingContext.scale(1, -1);
		
		drawHorizontalDividers();
		_drawingContext.restore();
		
	};
	
	function draw() {
		drawEmptyGameBoard();
	};
	
	_that.draw = draw;
	
	return _that;
};