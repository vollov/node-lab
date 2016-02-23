//exports.sayHelloInEnglish = function() {
//  return "HELLO";
//};
//    
//exports.sayHelloInSpanish = function() {
//  return "Hola";
//};





module.exports = function(){
	
	return {
		  sayHelloInEnglish: function() {
		    return f1() + "HELLO";
		  },
		        
		  sayHelloInSpanish: function() {
		    return "Hola";
		  }
	}
};

function f1(){
	return 'f1():';
} 