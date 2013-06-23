require.config({
	baseURL: '/',
	
	paths: {
		sudoku: 'sudoku/Sudoku',
		utility: 'utility/utility',
		jquery: 'lib/jquery-1.9.1.min',
		json2: 'lib/json2',
		modernizr: 'lib/modernizr-2.6.2.min',
		underscore: 'lib/underscore-min'

	}
});

require(['jquery', 'json2', 'underscore', 'sudoku', 'utility', 'modernizr'], 
function($, JSON, _, Sudoku) {
	var Modernizr = window.Modernizr;
	
	$(document).ready( function() {
		
		var sudokuCanvas;
		var sudokuInterface;
		var basicMockSudokuGame;
		var gameBoardWidth;
		
		var $canvasWidthRange;
		var $canvasWidthText;
		
		function browserSupportsCanvas() {
		    return Modernizr.canvas;
		};
		
		if (!browserSupportsCanvas()) {
			return;
		};
		
		$canvasWidthRange = $('#canvasWidthRange');
		$canvasWidthText = $('#canvasWidthText');
		
		function canvasWidthRangeInputChange(e) {
			
			var width = this.value;
			$canvasWidthText.val(width);
			
			console.log("new width: " + width);
			
			sudokuCanvas.attr('width', width);
	        sudokuCanvas.attr('height', width);
	        
	        sudokuInterface.resize();
	        sudokuInterface.draw();
		};
		
	   function canvasWidthTextInputChange(e) {
	        
	        var width = parseInt(this.value);
	        
	        if (!Utility.isPositiveInteger(width) && !Utility.isZeroNumber(width)) {
	        	this.value = $canvasWidthRange.val();
	        	return;
	        }
	        
	        $canvasWidthRange.val(width);
	        
	        console.log("new width: " + width);
	        
	        sudokuCanvas.attr('width', width);
	        sudokuCanvas.attr('height', width);
	        
	        sudokuInterface.resize();
	        sudokuInterface.draw();
	    };
		
		sudokuCanvas = $('#sudokuCanvas');
		
		basicMockSudokuGame = BasicMockSudokuGame();
	    sudokuInterface = SudokuInterface(sudokuCanvas, basicMockSudokuGame);
	    
	    sudokuInterface.draw();

	    $canvasWidthRange.change(canvasWidthRangeInputChange);
	    $canvasWidthText.change(canvasWidthTextInputChange);
	});
});