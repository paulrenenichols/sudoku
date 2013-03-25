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
 * @param canvas {Object} A JQuery object whose first element is our canvas
 * @param sudokuGame {Object} An object that stores Sudoku Game State
 * @return {Object} A sudokuInterface object
 */
Sudoku.sudokuInterface = function(canvas, sudokuGame) {
	
	var _that = {};
	
	var _canvas = canvas;
	var _canvasHeight = _canvas.attr('height');
	var _canvasWidth = _canvas.attr('width');
	
	var _maxGameBoardWidth = ( _canvasHeight < _canvasWidth ) ? _canvasHeight : _canvasWidth; 

	var _countSmallDividers = 6;
	var _countBigDividers = 4;
	var _countNumberTiles = 9;
	
	var _minimumNumberTileWidth = 30;			// in pixels
	var _minimumBigDividerWidth = 5;	// in pixels
	var _minimumSmallDividerWidth = 2;	// in pixels
	var _minimumGameBoardWith = ( _countSmallDividers * _minimumSmallDividerWidth ) +
								( _countBigDividers * _minimumBigDividerWidth ) +
								( _countNumberTiles * _minimumNumberTileWidth );
	
	var _numberTileWidth = 60;
	var _bigDividerWidth = 10;
	var _smallDividerWidth = 3;
	var _lineWidth = 598;
	
	
	var _drawingContext = canvas.getContext("2d");
	
	function drawHorizontalDividers() {
		
		var yCoordinate = 0;
		
		
		_drawingContext.fillStyle = "#000000";
		
		_drawingContext.fillRect(0, yCoordinate, _lineWidth - 1, _bigDividerWidth);
		yCoordinate += _bigDividerWidth + _numberTileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _lineWidth - 1, _smallDividerWidth);
		yCoordinate += _smallDividerWidth + _numberTileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _lineWidth - 1, _smallDividerWidth);
		yCoordinate += _smallDividerWidth + _numberTileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _lineWidth - 1, _bigDividerWidth);
		yCoordinate += _bigDividerWidth + _numberTileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _lineWidth - 1, _smallDividerWidth);
		yCoordinate += _smallDividerWidth + _numberTileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _lineWidth - 1, _smallDividerWidth);
		yCoordinate += _smallDividerWidth + _numberTileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _lineWidth - 1, _bigDividerWidth);
		yCoordinate += _bigDividerWidth + _numberTileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _lineWidth - 1, _smallDividerWidth);
		yCoordinate += _smallDividerWidth + _numberTileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _lineWidth - 1, _smallDividerWidth);
		yCoordinate += _smallDividerWidth + _numberTileWidth;
		
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