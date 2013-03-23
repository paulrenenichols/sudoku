var TestUtilities = TestUtilities ? TestUtilities : (function() {
	
	var _that = {};
	function isFloat(value) {
        if ( (typeof value === 'number') && (value !== Math.floor(value)) ) {
            return true;
        }
        else {
            return false;
        }
    };
    _that.isFloat = isFloat;
    
    function isPositive(value) {
        if ( (typeof value === 'number') && (value > 0) ) {
            return true;
        }
        else {
            return false;
        }
    };
    _that.isPositive = isPositive;
    
    function isNegative(value) {
        if ( (typeof value === 'number') && (value < 0) ) {
            return true;
        }
        else {
            return false;
        }
    };
    _that.isNegative = isNegative;
    
    function testParameterString() {
        
        var i;
        var argumentStrings = [];
        var type;
        var subtype;
        var value;
        for( i = 0; i < arguments.length; i++ ) {
            
            type = typeof arguments[i];
            subtype = '';
            value = arguments[i];
            
            if (type === 'number') {
                                
                if ( value === 0 ) {
                    subtype = 'zero';
                }
                else if ( isPositive(value) && isFloat(value) ) {
                    subtype = 'positive float ';
                }
                else if ( isNegative(value) && isFloat(value) ) {
                    subtype = 'negative float ';
                }
                else if ( isPositive(value) && !isFloat(value) ) {
                    subtype = 'positive integer ';
                }
                else if ( isNegative(value) && !isFloat(value) ) {
                    subtype = 'negative integer ';
                }
                
                value = " " + value;
            }
            else if ( (type == 'object') && (value === null) ) {
                value = " " + value;
            }
            else if ( type === 'undefined' ) {
                value = "";
            }
            else if ( type === 'boolean') {
            	value = " " + value;
            }
            
            argumentStrings.push( "(" + subtype + type + value + ")" );
        }
        
        var paramString = arguments.length + " arguments: { ";
        for ( i = 0; i < argumentStrings.length; i++ ) {
            
            paramString = paramString + argumentStrings[i];
            
            if ( i !== argumentStrings.length - 1 ) {
                paramString = paramString + ', ';   
            }

        }
        paramString = paramString + " }, ";
        return paramString;
    };
    _that.testParameterString = testParameterString;
    
    return _that;
}());