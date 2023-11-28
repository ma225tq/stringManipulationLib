export default {
	// Indicates which provider should be used to instrument code for coverage
	coverageProvider: 'v8',
  
	// The test environment that will be used for testing
	testEnvironment: 'node',
  
	setupFilesAfterEnv: [
		'jest-extended/all',
		'jest-chain'
	],
	
	reporters: [
		'default',
		['jest-html-reporter', {'pageTitle': 'Test Report'
		}]]
};