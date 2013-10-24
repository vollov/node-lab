var express = require('express')
	, midware = require('./midware');

var app = exports.app = express();

app.configure(function(){
  
  app.use(express.favicon());

  app.use(express.bodyParser());
  app.use(express.methodOverride());
  
  app.use(express.cookieParser('my apssword string'));
  app.use(express.session());
  
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});



app.all('*', midware.header, midware.auth);
//app.all('*', function(req, res, next) {
//    res.header('Access-Control-Allow-Origin', '*');
//    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
//    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//    next();
//});
//
//function requireAuthentication(){
//	return function(req, res, next) {
//		var tokenid = req.query.tokenid;
//		console.log('requireAuthentication tokenid = ' + tokenid);
//		next();
//	};
//}
require('./routes')(app);

app.listen(3000, '0.0.0.0');
console.log("Express server listening...");
