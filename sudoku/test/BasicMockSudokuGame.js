/**
 * 
 */
var SudokuTest = SudokuTest ? SudokuTest : {};

SudokuTest.basicMockSudokuGame = function() {
	
	var _that = {};
	
	function getTileState(rowIndex, columnIndex) {
		return (rowIndex + columnIndex) % 10;
	};
	
	function setTileState(rowIndex, columnIndex, value) {
		
	};
	
	_that.getTileState = getTileState;
	_that.setTileState = setTileState;
	
	return _that;
};