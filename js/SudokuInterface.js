var SudokuInterface = (function nameSpace() {
	
	/*
	 * PRIVATE
	 */
	var minimumTileWidth = 10;
	var minimumDividerWidth = 1;
	
	var countOfTiles = 9;
	var countOfDividers = 10;
	
	var minimumInterfaceWidth = (minimumTileWidth * countOfTiles) 
									+ (minimumDividerWidth * countOfDividers); 
	
	function calculateTileWidth(proposedInterfaceWidth) {
		
		if (arguments.length == 0) {		//No arguments provided
			throw new Error('No proposedInterfaceWidth given to function');
		}
		else if (arguments.length == 1) {	//The width of the sudoku interface has been provided
			
			if ( ( typeof proposedInterfaceWidth != "number" ) 
					|| ( isNaN(proposedInterfaceWidth) )) {
				throw new Error("proposedInterfaceWidth is Not a Number");
			}

		}
	}
	
	/*
	 * PUBLIC
	 */
	
	
	/*
	 * Constructor for the SudokuInterface class
	 */
	function SudokuInterface() {
		
		if (arguments.length == 0) {		//No arguments provided
			
		}
		else if (arguments.length == 1) {	//The width of the sudoku interface has been provided
			
			this.interfaceWidth = arguments[0];
		}
		else if (arguments.length == 2) {	//The width of the interface and the SudokuGame object have been given
			this.interfaceWidth = arguments[0];
			this.sudokuGame = arguments[1];
		}
		
		if ((typeof this.interfaceWidth != "number") 
				|| ( isNaN(this.interfaceWidth) )) {
			throw new Error("Width of Sudoku Interface not provided or NaN");
		}
		
		if (this.interfaceWidth < minimumInterfaceWidth) {
			throw new Error("Specified interface width is insufficient.  Width must be at least " 
								+ minimumInterfaceWidth + " pixels");
		}
		
		this.tileWidthMultiplier = Math.floor( this.interfaceWidth 
				/  ( countOfTiles * (minimumTileWidth + minimumDividerWidth) ));
		
		if ( ( (this.tileWidthMultiplier * this.countOfTiles * this.minimumTileWidth) 
				+ (this.tileWidthMultiplier * this.countOfDividers * this.minimumDividerWidth) ) > this.interfaceWidth ) {
			
			this.tileWidthMultiplier -= 1;
		}
		
		this.tileWidth = this.tileWidthMultiplier * this.minimumTileWidth;
		this.dividerWidth = this.tileWidthMultiplier * this.minimumDividerWidth;
		this.interfaceWidth = (this.countOfTiles * this.tileWidth) + (this.countOfDividers * this.dividerWidth);
	};
}());