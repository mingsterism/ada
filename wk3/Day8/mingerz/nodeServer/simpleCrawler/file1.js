var functions = require('./httpsCrawler.js')
functions ({
	url: "https://www.google.com", 
	headers: {
		'User-Agent': 'request'
	}
})
