function SudokuInterface() {
	
	/*
	 * Constructor for the SudokuInterface class
	 */
	function SudokuInterface() {
		
		this.minimumTileWidth = 20;
		this.minimumDividerWidth = 1;
		
		this.countOfTiles = 9;
		this.countOfDividers = 10;
		
		this.minimumInterfaceWidth = (this.minimumTileWidth * this.countOfTiles) 
										+ (this.minimumDividerWidth * this.countOfDividers); 
		
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
		
		if (this.interfaceWidth < this.minimumInterfaceWidth) {
			throw new Error("Specified interface width is insufficient.  Width must be at least " 
								+ this.minimumInterfaceWidth + " pixels");
		}
	};
};