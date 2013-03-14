function MyObject(number) {
	this.number = number;
}

MyObject.prototype.add = function(num) {
	return this.number + num;
}

var myObj = new MyObject(4);
myObj.add(5);