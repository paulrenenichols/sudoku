


	// This function is a 'constructor'
	// We create properties for the objects that this constructor makes
	//   by writing 'this.property_name'
	// However, note that if you call this constructor like a function without
	//   using the 'new' keyword, the 'this' in the function will refer to 
	//   the global object, not a 'LangType' object
	var LangType = function (langType){
		
		this.cssType = {
				langSass: '\=',
				langCSS: '.',			// same property name
				langCSS: '@mixin '		// same property name
			};
		
		// Declare properties here
		this.langType = langType;
		this.openBracket;
		this.closeBracket;
		
		// More properties
		
		
		// Configure properties here
		if (langType == (this.cssType.langCSS || this.cssType.langSCSS)){
			this.openBracket = "{ ";
			this.closeBracket = "}";
		}
		
		// More configuration

	};

	// Now we define methods
	
	// You define methods for constructed objects by assigning them to
	//   properties of your constructor's prototype
	LangType.prototype.backgroundURLs = function() {
		
		// Code that does work relative to the configuration goes here
		
		var lines = $('#new-icon-file-names').val().split(" ");
		var newArray = [];

		for (var i=0; i<lines.length; i++){ 
			newArray[i] = this.langType + lines[i] + this.openBracket 
				+ "\n" + "background: image_url(\"" + lines[i] + "\")" + this.closeBracket;
		};

		return newArray;
	};
	
	LangType.prototype.anotherLangTypeMethod = function(parameter1, parameter1) {
		
		// Function body
		return result;
	};
	
	// Now we create an instance of 'LangType' with the 'new' operator
	var sassLangType = new LangType(cssType.langSass);
	
	sassLangType.backgroundURLs();
	sassLangType.anotherLangTypeMethod(p1, p2);