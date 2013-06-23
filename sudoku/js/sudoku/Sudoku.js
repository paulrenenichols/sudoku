// Sudoku.js
//
// 2013Jun23
// Paul Rene Nichols
//
// This is the require.js module for my Sudoku engine

require.config({
	
	paths: {
		basicMockSudokuGame: 'sudoku/BasicMockSudokuGame',
		sudokuGame: 'sudoku/SudokuGame',
		sudokuInterface: 'sudoku/SudokuInterface'

	}
});

define(['jquery', 'sudokuInterface', 'sudokuGame', 'basicMockSudokuGame'], 
function($, si, sg, bmsg) {
	var Sudoku = {};
	Sudoku.SudokuInterface = si;
	Sudoku.SudokuGame = sg;
	Sudoku.BasicMockSudokuGame = bmsg;
	return Sudoku;
});