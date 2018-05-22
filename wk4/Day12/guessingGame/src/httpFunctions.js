const https = require('https')
const options = {
    host: 'api.datamuse.com', 
    path: '/words?ml=spoon&sp=*a&max=10', 
    headers: {
        'Access-Control-Allow-Origin': '*', 
    }, 
    method: 'GET'
}
const httpRequest = () => {
    console.log("================")
    https.get(options, (res) => {
        
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);

        res.on('data', (d) => {
            process.stdout.write(d);
        });

        }).on('error', (e) => {
        console.error(e);
    });
}

export default httpRequest
