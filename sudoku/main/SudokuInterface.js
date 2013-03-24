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
	
	var drawingContext = canvas.getContext("2d");
	
	function draw() {
		
		drawingContext.strokeStyle = "#000000";
		drawingContext.lineWidth = 5;
		drawingContext.lineJoin = 'round';
		drawingContext.strokeRect(10, 10, 180, 180);
	};
	
	_that.draw = draw;
	
	return _that;
};