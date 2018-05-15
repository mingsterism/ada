const https = require('https');
const cheerio = require('cheerio')


const options = {
  hostname: 'www.thestar.com.my',
  path: '/business/',
  method: 'GET',
};

var main = ((urlOptions) => {
  return new Promise((resolve, reject) => {
    const req = https.request(urlOptions,
      (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk.toString()));
        res.on('error', reject);
        res.on('end', () => {
          if (res.statusCode >= 200 && res.statusCode <= 299) {
            resolve({statusCode: res.statusCode, headers: res.headers, body: body});
          } else {
            reject('Request failed. status: ' + res.statusCode + ', body: ' + body);
          }
        });
      });
    req.on('error', reject);
    req.end();
  });
});

main(options).then ( (data) => {
 const $ = cheerio.load(data.body) 
 console.log($('#slcontent_1_wleft1_1_lstStories_ctrl0_ctl00_item_hyperlink').text())
})