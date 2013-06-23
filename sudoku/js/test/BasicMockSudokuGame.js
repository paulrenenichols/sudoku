/**
 * 
 */
var SudokuTest = SudokuTest ? SudokuTest : {};

SudokuTest.basicMockSudokuGame = function() {
	
	var _that = {};
	
	function getTileState(rowIndex, columnIndex) {
		//console.log("basicMockSudokuGame: getTileState()");
		return (rowIndex + columnIndex) % 10;
	};
	
	function setTileState(rowIndex, columnIndex, value) {
		
	};
	
	function countOfRows() {
		return 9;
	};
	
	function countOfColumns() {
		return 9;
	};
	
	_that.countOfRows = countOfRows;
	_that.countOfColumns = countOfColumns;
	_that.getTileState = getTileState;
	_that.setTileState = setTileState;
	
	return _that;
};