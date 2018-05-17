const https = require('https');
const cheerio = require('cheerio')


// const options = {
//   hostname: 'www.thestar.com.my',
//   path: '/business/',
//   method: 'GET',
// };
const options = {
  hostname: 'www.codeweekend.asia',
  path: '/', 
  method: 'GET'
}
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
  const textHTML = `
    <h1 id="name">Tthis is name</h1>
    <h1 id="name">
    Tthis is name
    </h1>
    <div class="header">
      <p>Contents</p>
    </div>
    <div class="header">
      <p>Contents</p>
    </div>
  `
 const $ = cheerio.load(data.body) 
 console.log($('body > section.bg-img.pt100.pb100 > div > div.section_title.mb30.justify-content-center.align-items-center > h3').text())

//  const $ = cheerio.load(textHTML) 
//  console.log($('.header').text())

//  console.log($('#slcontent_1_wleft1_1_lstStories_ctrl0_ctl00_item_hyperlink').contents())
})