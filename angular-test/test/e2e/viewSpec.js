'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {
	var ptor;
	
	it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
		ptor = protractor.getInstance();
	    ptor.get('http://localhost:8000');
	    console.log('Done!!');
	});
});
