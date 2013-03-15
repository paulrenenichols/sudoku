	var cssType = {
		langSass: '\=',
		langCSS: '.',
		langCSS: '@mixin '
	};


	var LangType = function (langType){
		
		var openBracket;
		var closeBracket;
		
		// Other variable that you want to construct based on langType
		// These will be 'private' to the returned function, i.e. they won't accessible from the outside.
		
		
		if (langType == (langCSS || langSCSS)){
			openBracket = "{ ";
			closeBracket = "}";
		}
		

	};

	// Other 'langType' specific configuration code
	
	return function() {
		
		// Code that does work relative to the configuration goes here
		
		var lines = $('#new-icon-file-names').val().split(" ");
		var newArray = [];

		for (var i=0; i<lines.length; i++){ 
			newArray[i] = cssType.langType + lines[i] + openBracket 
				+ "\n" + "background: image_url(\"" + lines[i] + "\")" + closeBracket;
		};

		return newArray;
	};