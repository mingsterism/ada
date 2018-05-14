var crawlerTool = require('request');
 
function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
	console.log(response.statusCode)
  } else {
	console.log(body)
  }

}

function main (options) {
	console.log("Running", options)
	crawlerTool(options, callback)
}	

module.exports = {
	mainKey: main, 
}



