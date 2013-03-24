/**
 * Utility functions
 * 
 * @module Utility
 */
var Utility = Utility ? Utility : {};

(function() {
	
	/**
	 * Tests to see if its parameter is a number
	 * 
	 * @param value
	 * @returns {Boolean} True if value is a number, false otherwise
	 */
	Utility.isNumber = function isNumber(value) {
		if ( !isNaN(value) && ( typeof value === 'number') ) {
			return true;
		}
		else {
			return false;
		}
	};
	
	/**
	 * Tests to see if its parameter is an integer
	 * 
	 * @param value
	 * @returns {Boolean} True if value is an Integer, false otherwise
	 */
	Utility.isInteger = function isInteger(value) {
		var absoluteValue;
		
		if ( isNumber(value) ) {
			
			absoluteValue = Math.abs(value);
			if ( (asoluteValue === Math.floor(absoluteValue)) ) {
				
				return true;
			}
			else {
				return false;
			}
		}
		else {
			return false;
		}
	};
	
	/**
	 * Tests to see if its parameter is an float
	 * 
	 * @param value
	 * @returns {Boolean} True if value is a float, false otherwise
	 */
	Utility.isFloat = function isFloat(value) {
		var absoluteValue;
		
		if ( isNumber(value) ) {
			
			absoluteValue = Math.abs(value);
			if ( (asoluteValue !== Math.floor(absoluteValue)) ) {
				
				return true;
			}
			else {
				return false;
			}
		}
		else {
			return false;
		}
	};
	
	/**
	 * Tests to see if its parameter is a positive integer.
	 * 
	 * @param value
	 * @returns {Boolean} True if value is a positive integer, false otherwise.
	 */
	Utility.isPositiveInteger = function isPositiveInteger(value) {
		if ( isInteger(value) && (value > 0) ) {
			
			return true;
		}
		else {
			return false;
		}
	};
	
	/**
	 * Tests to see if its parameter is a negative integer.
	 * 
	 * @param value
	 * @returns {Boolean} True if value is a negative integer, false otherwise.
	 */
	Utility.isNegativeInteger = function isNegativeInteger(value) {
		if ( isInteger(value) && (value < 0) ) {
			
			return true;
		}
		else {
			return false;
		}
	};
	
	/**
	 * Tests to see if its parameter is a positive float.
	 * 
	 * @param value
	 * @returns {Boolean} True if value is a positive float, false otherwise.
	 */
	Utility.isPositiveFloat = function isPositiveFloat(value) {
		if ( isFloat(value) && (value > 0) ) {
			
			return true;
		}
		else {
			return false;
		}
	};
	
	/**
	 * Tests to see if its parameter is a negative float.
	 * 
	 * @param value
	 * @returns {Boolean} True if value is a negative float, false otherwise.
	 */
	Utility.isNegativeFloat = function isNegativeFloat(value) {
		if ( isFloat(value) && (value < 0) ) {
			
			return true;
		}
		else {
			return false;
		}
	};
	
	/**
	 * Tests to see if its parameter is a zero number
	 * 
	 * @param value
	 * @returns {Boolean} True if value is a zero number, false otherwise
	 */
	Utility.isZeroNumber = function isZeroNumber(value) {
		if ( isNumber(value) && (value === 0) ) {
			return true;
		}
		else {
			return false;
		}
	};
	
	/**
	 * Tests to see if its parameter is undefined.
	 * 
	 * @param value
	 * @returns {Boolean} True if parameter is undefined, false otherwise.
	 */
	Utility.isUndefined = function isUndefined(value) {
		if (typeof value === 'undefined') {
			return true;
		}
		else {
			return false;
		}
	};
	
	/**
	 * Tests to see if its parameter is null.
	 * 
	 * @param value
	 * @returns {Boolean} True if parameter is null, false otherwise.
	 */
	Utility.isNull = function isNull(value) {
		if ( (typeof value === 'object') && (value === null) ) {
			return true;
		}
		else {
			return false;
		}
	};

	/**
	 * Tests to see if its parameter is boolean.
	 * 
	 * @param value
	 * @returns {Boolean} True if parameter is boolean, false otherwise.
	 */
	Utility.isBoolean = function isBoolean(value) {
		if ( typeof value === 'boolean' ) {
			return true;
		}
		else {
			return false;
		}
	};
	
    function argumentsToString() {
        
        var i;
        var argumentStrings = [];
        var type;
        var subtype;
        var value;
        for( i = 0; i < arguments.length; i++ ) {
            
            type = typeof arguments[i];
            subtype = '';
            value = arguments[i];
            
            if ( isNumber(value) ) {
                                
                if ( isZeroNumber(value) ) {
                    subtype = 'zero';
                }
                else if ( isPositiveFloat(value) ) {
                    subtype = 'positive float ';
                }
                else if ( isNegativeFloat(value) ) {
                    subtype = 'negative float ';
                }
                else if ( isPositiveInteger(value) ) {
                    subtype = 'positive integer ';
                }
                else if ( isNegativeInteger(value) ) {
                    subtype = 'negative integer ';
                }
                
                value = " " + value;
            }
            else if ( isNull(value) ) {
                value = " " + value;
            }
            else if ( isUndefined(value) ) {
                value = "";
            }
            else if ( isBoolean(value) ) {
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
}());