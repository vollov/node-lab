var express = require('express');
var app = exports.app = express();

app.configure(function(){
	app.use(express.favicon());
	//app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
});

require('./api/nesting')(app);

app.listen(3000, '0.0.0.0');
console.log("Express server listening...");
