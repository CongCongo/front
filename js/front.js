function extend(child, parent) {
	var f = function() {};
	f.prototype = parent.prototype;
	child.prototype = new f();
	child.prototype.constructor = child;
	child.uber = parent.prototype;
}

function Animal() {}
Animal.prototype.species = "Animal";

function Cat(name, color) {
	this.name = name;
	this.color = color;
}
extend(Cat, Animal);
Cat.prototype.eat = function() {
	alert('eat mouse')
};