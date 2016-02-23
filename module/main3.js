var Greeting = function(mode) {
	var mode = mode;
	return {
		f1 : function() {
			console.log(this.f2());
			return "HELLO " + mode;
		},

		f2 : function() {
			return "Hola " + mode;
		}
	}
};

var greeting = Greeting('test')

console.log(greeting.f1());