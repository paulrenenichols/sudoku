var Sudoku = {};
	
Sudoku.sudokuInterface = function(width) {
	
	//Private
	//
	var that = {};
	var canvas;
	
	var minimumTileWidth = 10;
	var minimumDividerWidth = 1;
	
	var countOfTiles = 9;
	var countOfDividers = 10;
	
	var minimumInterfaceWidth = (minimumTileWidth * countOfTiles) +
									(minimumDividerWidth * countOfDividers); 
	
	var tileWidth;
	var dividerWidth;
	var interfaceWidth;
	
	//  The following two functions serve to help the following code block
	//    in testing to see if the 'width' parameter to the constructor
	//    is valid.
	//
	function interfaceWidthIsNotANumber(width) {
		
		if ( ( typeof width != "number" ) ||
				( isNaN(width) )) {
			
			return true;
		}
		
		return false;
	};
	
	function interfaceWidthIsSmallerThanMinimumSize(width) {
		
		if ( width < minimumInterfaceWidth ) {
			return true;
		}
		
		return false;
	};
	
	//  This 'if-else' block tests to see if the 'width' provided
	//    to the 'sudokuInterface' constructor is valid.
	//  If the 'width' parameter isn't provided to the constructor,
	//    or if the 'width' parameter is not valid, exceptions are thrown.
	//
	if ( arguments.length === 0 ) {		
		throw new Error('You must provide the desired width for the sudoku interface you are creating');
	}
	else if ( arguments.length === 1 ) {
		
		if ( interfaceWidthIsNotANumber(width) ) {
			throw new Error("The width of the interface must be a number");
		}
		else if ( interfaceWidthIsSmallerThanMinimumSize(width) ) {
			throw new Error("The width of the interface must be greater than or equal to " +
					minimumInterfaceWidth + " pixels");
		}
	}
	
	function calculateTileWidth(width) {
				
	};
	
	
	//PUBLIC
	//
};
