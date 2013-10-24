

module.exports = function(app) {
	app.get('/', function(req, res){
		return res.send(200, 'index page!');
	});
};