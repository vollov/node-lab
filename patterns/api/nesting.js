var db = require('../lib/db');

module.exports = function(app) {
	
	/**
	 * api calls with nesting functions
	 */
	app.get('/nesting/:vid', function(req, res){
		var vid = req.params.vid;
		
		vehicle = {status:'pass', vid : vid};
		db.remove('vehicle', vehicle, function (err, vehicle) {
			var mileage = {status:'pass', vid: vehicle.vid, mid : 3344};
			db.remove('mileage', mileage, function(err, mileage){
				
				console.log('removed mileages with vid=' + mileage.vid + ', mid=' + mileage.mid);
				return res.send(200, {message:'mileage removed'});
			})
		});
	});
	
	/**
	 * flatted nesting functions
	 */	
	

	
	app.get('/flat/:vid', function(req, res){
		var vid = req.params.vid;
		vehicle = {status:'pass', vid : vid};
		
		var mileageProcessor = function(err, mileage){
			console.log('removed mileages with vid=' + mileage.vid + ', mid=' + mileage.mid);
			return res.send(200, {message:'mileage removed'});
		};
		
		var vehicleProcessor = function(err, vehicle){
			var mileage = {status:'pass', vid: vehicle.vid, mid : 3344};
			db.remove('mileage', mileage, mileageProcessor);
		};
		
		db.remove('vehicle', vehicle, vehicleProcessor);
	});
}