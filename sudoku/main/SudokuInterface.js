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
	 * The object responsible for the game play logic.
	 */
	var _sudokuGame;
	
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
	
	/*
	 * This is an array that will store the 'tile positions'.
	 * The 'tile positions' are the distance in pixels from the
	 * upper left hand corner of the game board to the start of
	 * a tile.
	 * 
	 * These values will be used to draw the game state onto 
	 * the game board.  The game state thinks of the game tiles
	 * in terms of column and row indexes ranging from 0 to 8.
	 * The game board thinks in pixels.  This is part of the
	 * bridge between those two schemes.
	 */
	var _tilePositions;
	
	function init(cavnas, sudokuGame) {
		
		//console.log("sudokuInterface: init()");
		
		var minimumWidthMultiplier;
		var leftOverWidth;
		var extraTileWidth;
		
		_sudokuGame = sudokuGame;
		
		_canvas = canvas;
		_canvasHeight = _canvas.attr('height');
		_canvasWidth = _canvas.attr('width');
		
		//console.log("sudokuInterface: init(): width " + _canvasWidth + ", height " + _canvasHeight);
		
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
		
		calculateTilePositions();
	};
	
	function resize() {
		
		//console.log("sudokuInterface: resize()");
		
		var minimumWidthMultiplier;
		var leftOverWidth;
		var extraTileWidth;
		
		_canvasHeight = _canvas.attr('height');
		_canvasWidth = _canvas.attr('width');
		
		//console.log("sudokuInterface: init(): width " + _canvasWidth + ", height " + _canvasHeight);
		
		_drawingContext = canvas.get(0).getContext("2d");
		
		_maxGameBoardWidth = ( _canvasHeight < _canvasWidth ) ? _canvasHeight : _canvasWidth; 

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
		
		calculateTilePositions();
	};

	function calculateTilePositions() {
		_tilePositions = [];
		
		//_tilePositions[0]
		_tilePositions.push(_bigDividerWidth);
		
		//_tilePositions[1]
		_tilePositions.push(_tilePositions[0] + _numberTileWidth + _smallDividerWidth);
		
		//_tilePositions[2]
		_tilePositions.push(_tilePositions[1] + _numberTileWidth + _smallDividerWidth);
		
		//_tilePositions[3]
		_tilePositions.push(_tilePositions[2] + _numberTileWidth + _bigDividerWidth);
		
		//_tilePositions[4]
		_tilePositions.push(_tilePositions[3] + _numberTileWidth + _smallDividerWidth);
		
		//_tilePositions[5]
		_tilePositions.push(_tilePositions[4] + _numberTileWidth + _smallDividerWidth);
		
		//_tilePositions[6]
		_tilePositions.push(_tilePositions[5] + _numberTileWidth + _bigDividerWidth);
		
		//_tilePositions[7]
		_tilePositions.push(_tilePositions[6] + _numberTileWidth + _smallDividerWidth);
		
		//_tilePositions[8]
		_tilePositions.push(_tilePositions[7] + _numberTileWidth + _smallDividerWidth);
	};
	
	function drawHorizontalDividers() {
		
		//console.log("sudokuInterface: drawHorizontalDividers()");
		
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
		//console.log("sudokuInterface: drawEmptyGameBoard()");
		
		drawHorizontalDividers();
		
		_drawingContext.save();
		
		_drawingContext.rotate(Math.PI / 2);
		_drawingContext.scale(1, -1);
		
		drawHorizontalDividers();
		_drawingContext.restore();
		
	};
	
	function drawTile(row, column, value) {
		var tileCenterX = _tilePositions[column] + ( _numberTileWidth / 2 );
		var tileCenterY = _tilePositions[row] + ( _numberTileWidth / 2 );
		
		_drawingContext.fillText(value, tileCenterX, tileCenterY);
	};
	
	function drawGameState() {
		//console.log("sudokuInterface: drawGameState()");
		
		var column;
		var row;
		
		_drawingContext.fillStyle = "#000000";
		
		_drawingContext.font = Math.floor(2 * ( _numberTileWidth / 3 ) ) + 'px sans-serif';
		_drawingContext.textAlign = 'center';
		_drawingContext.textBaseline = 'middle';
		
		for (column = 0; column < _sudokuGame.countOfColumns(); column++) {
			
			for (row = 0; row < _sudokuGame.countOfRows(); row++) {
				drawTile(row, column, _sudokuGame.getTileState(row, column));
			}
		}
	};
	
	function draw() {
		//console.log("sudokuInterface: draw()");
		console.log("sudokuInterface: draw(): min game board width " + _minimumGameBoardWidth + ", width " + _canvasWidth + ", height " + _canvasHeight);
		drawEmptyGameBoard();
		drawGameState();
	};
	
	_that.draw = draw;
	_that.resize = resize;
	
	init(canvas, sudokuGame);
	
	return _that;
};