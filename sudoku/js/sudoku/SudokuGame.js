/**
 * @class sudokuGame
 * @constructor 
 * @param {Number} width The desired width and height of the canvas
 * @return {Object} A sudokuGame object
 */
SudokuGame = function() {
	
	var _that = {};
	
	var _initialGame;
	
	var _gameState;
	
	var _takenTiles;
	
	function Tile(row, column, state) {
		
		var _that = {};

		function getRow() {
			return row;
		}
		
		function getColumn() {
			return column;
		}
		
		function getState() {
			return state;
		}
		
		_that.getRow = getRow;
		_that.getColumn = getColumn;
		_that.getState = getState;
		
		return _that;
	}
	
	function TakenTiles() {
		
		var takenTiles = [];
		
		var _that = {};
		
		function containsTileWithSameCoordinates(tile) {
			var result = _find(takenTiles, function(currentTile) {
				return (currentTile.getRow() === tile.getRow()) && (currentTile.getColumn() === tile.getColumn());
			});
		}
		
		function removeTile(tile) {
			
		}
		
		function addTile(tile) {
			takenTiles = _.union(takenTiles, [tile]);
		}
		
	}
	
	function create2DSquareArray(width){
		var array = new Array(width);
		var i = 0;
		var j = 0;
		for(i = 0; i < width; i++) {
			array[i] = new Array(width);
			
			for(j = 0; j < width; j++){
				array[i][j] = 0;
			}
		}
		
		return array;
	}
	
	
	
	function createNewGame() {
		
	}
	
	function init() {
		_initialGame = create2DSquareArray(9);
		_gameState = create2DSquareArray(9);
		
	}
	
	_that.Tile = Tile;
	_that.TakenTiles = TakenTiles;
	
	init();
	return _that;
};