var admin = require('firebase-admin');

var serviceAccount = require('./web-extractor-204200-firebase-adminsdk-hlhty-9fa9c19de4.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://web-extractor-204200.firebaseio.com/'
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();

var ref = db.ref("Games/Action Games");

// ref.once("value", function(x) {
//   console.log(x.val());
// });

ref.update({
  "CS": 4,
  "DOTA": 45
})