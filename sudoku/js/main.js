requirejs.config({
	baseURL: 'js/lib',
	
	paths: {
		sudoku: '../sudoku',
		test: '../test',
		utility: '../utility'
	}
});

requirejs(['jquery-1.9.1.min', 'json2', 'modernizr-2.6.2.min', 'underscore-min', 'SudokuInterface', 'BasicMockSudokuGame'], 
function($, JSON, Modernizr, _, Sudoku.sudokuInterface, SudokuTest.basicMockSudokuGame) {
	
});