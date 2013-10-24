

exports.header = function(req, res, next) {
	console.log('Add HTTP header contents');
	next();
};

exports.auth = function(req, res, next) {
	console.log('Authenticate request');
	next();
};