// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '573996282737233', // your App ID
		'clientSecret' 	: 'd8546232cf7cc990a72eb84a1b489c23', // your App Secret
		'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'UcIR2mziLxvUI8qdqavwtPuk3',
		'consumerSecret' 	: 'your-client-secret-here',
		'callbackURL' 		: 'Bo1qOGeVBnPI5Wj68blRqrXQpyaQngOLmInlj8n0d3UkVGtUs5'
	},

	'googleAuth' : {
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};