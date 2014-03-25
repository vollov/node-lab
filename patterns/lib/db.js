
module.exports = {
	remove : function(collection, data, callback) {
		console.log('remove docs in collection [' + collection + ']');
		var err = true;
		// status = pass | fail
		if(data.status=='pass')
			err = false;
		
		callback(err, data);
	},
	//db.mycollection.save({created:'just now'})
	save : function(collection, body, callback) {
//		//console.log('save into => ' + collection + ' with: ' +body);
//		db.collection(collection).save(body, callback);
//		//console.log('save db=> ' + db + ' , coll=> ' + collection);
	},
}