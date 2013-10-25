exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	seleniumServerJar: 'test/lib/selenium-server-standalone-2.37.0.jar',
	capabilities: {
		'browserName': 'chrome'
	},
	jasmineNodeOpts: {
		specs: ['test/e2e/viewSpec.js']
	}
}