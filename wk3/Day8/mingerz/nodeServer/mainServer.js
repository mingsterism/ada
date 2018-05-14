const http = require('http')
const server = http.createServer()

const crawler = require('./simpleCrawler/httpsCrawler.js');
server.on('request', (req, res) => {
	req.on('data', (chunk) => {
		crawler.mainKey(chunk.toString())
	})
	res.end('done')
})
server.listen('8081')


console.log("Listening on port 8081")




