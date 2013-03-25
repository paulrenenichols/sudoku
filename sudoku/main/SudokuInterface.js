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
	
	/*
	 * _canvas is the JQuery object that holds our
	 *   canvas element.
	 *   
	 * _canvasHeight and _canvasWidth cache the canvas's
	 *   current height and width in pixels
	 */
	var _canvas;
	var _canvasHeight;
	var _canvasWidth;
	
	/*
	 * The drawing context for the canvas.
	 *   This is the object that we use
	 *   to draw on the canvas.
	 */
	var _drawingContext;
	
	/*
	 * _maxGameBoardWidth is the lesser of the canvas's
	 *   width and height.  This is the upper limit
	 *   of the size of our game board.
	 */
	var _maxGameBoardWidth; 

	/*
	 * Big dividers divide the game board into
	 *   three sections along each dimension
	 *   of the board, dividing the board into
	 *   nine groups of nine number tiles.
	 *   
	 * Small dividers divide each of the nine
	 *   subgroups of number tiles into nine
	 *   number tiles.
	 *   
	 * There are nine number tiles along each
	 *   dimension of the game board.
	 */
	var _countBigDividers;
	var _countSmallDividers;
	var _countNumberTiles;

	/*
	 * These constants set the minimum values for
	 *   game board dimensions in pixels.
	 */
	var _minimumBigDividerWidth;	
	var _minimumSmallDividerWidth;	
	var _minimumNumberTileWidth;	
	var _minimumGameBoardWidth;
	
	/*
	 * The actual width of the game board
	 */
	var _gameBoardWidth;
	
	/*
	 * Current values for game board dimensions.
	 */
	var _numberTileWidth;
	var _bigDividerWidth;
	var _smallDividerWidth;
	
	function init(cavnas, sudokuGame) {
		
		var minimumWidthMultiplier;
		var leftOverWidth;
		var extraTileWidth;
		
		_canvas = canvas;
		_canvasHeight = _canvas.attr('height');
		_canvasWidth = _canvas.attr('width');
		
		_drawingContext = canvas.get(0).getContext("2d");
		
		_maxGameBoardWidth = ( _canvasHeight < _canvasWidth ) ? _canvasHeight : _canvasWidth; 

		_countSmallDividers = 6;
		_countBigDividers = 4;
		_countNumberTiles = 9;
		
		_minimumNumberTileWidth = 30;	// in pixels
		_minimumBigDividerWidth = 5;	// in pixels
		_minimumSmallDividerWidth = 2;	// in pixels
		_minimumGameBoardWidth = ( _countSmallDividers * _minimumSmallDividerWidth ) +
									( _countBigDividers * _minimumBigDividerWidth ) +
									( _countNumberTiles * _minimumNumberTileWidth );
		
		minimumWidthMultiplier = Math.floor( _maxGameBoardWidth / _minimumGameBoardWidth );
		leftOverWidth = _maxGameBoardWidth - ( minimumWidthMultiplier * _minimumGameBoardWidth );
		extraTileWidth = Math.floor( leftOverWidth / _countNumberTiles );
		
		_numberTileWidth = ( _minimumNumberTileWidth * minimumWidthMultiplier ) +  extraTileWidth;
		_bigDividerWidth = _minimumBigDividerWidth * minimumWidthMultiplier;
		_smallDividerWidth = _minimumSmallDividerWidth * minimumWidthMultiplier;
		_gameBoardWidth = ( _countSmallDividers * _smallDividerWidth ) +
							( _countBigDividers * _bigDividerWidth ) +
							( _countNumberTiles * _numberTileWidth );
	};
	
	function drawHorizontalDividers() {
		
		var yCoordinate = 0;
		
		
		_drawingContext.fillStyle = "#000000";
		
		_drawingContext.fillRect(0, yCoordinate, _gameBoardWidth - 1, _bigDividerWidth);
		yCoordinate += _bigDividerWidth + _numberTileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _gameBoardWidth - 1, _smallDividerWidth);
		yCoordinate += _smallDividerWidth + _numberTileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _gameBoardWidth - 1, _smallDividerWidth);
		yCoordinate += _smallDividerWidth + _numberTileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _gameBoardWidth - 1, _bigDividerWidth);
		yCoordinate += _bigDividerWidth + _numberTileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _gameBoardWidth - 1, _smallDividerWidth);
		yCoordinate += _smallDividerWidth + _numberTileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _gameBoardWidth - 1, _smallDividerWidth);
		yCoordinate += _smallDividerWidth + _numberTileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _gameBoardWidth - 1, _bigDividerWidth);
		yCoordinate += _bigDividerWidth + _numberTileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _gameBoardWidth - 1, _smallDividerWidth);
		yCoordinate += _smallDividerWidth + _numberTileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _gameBoardWidth - 1, _smallDividerWidth);
		yCoordinate += _smallDividerWidth + _numberTileWidth;
		
		_drawingContext.fillRect(0, yCoordinate, _gameBoardWidth - 1, _bigDividerWidth);
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
	
	init(canvas, sudokuGame);
	
	return _that;
};