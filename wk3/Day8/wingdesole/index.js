const firebase = require('firebase');

const config = {
  apiKey: 'AIzaSyBsgoyEXFZRb0YTYdTpC6Ib5UG7m9PtIEg',
  authDomain: 'myfirstproject-d3169.firebaseapp.com',
  databaseURL: 'https://myfirstproject-d3169.firebaseio.com',
  storageBucket: 'myfirstproject-d3169.appspot.com',
};
firebase.initializeApp(config);

const admin = require('firebase-admin');

var serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

/////sample data//////
var db = admin.firestore()

var docRef = db.collection('users').doc('alovelace');

var setAda = docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});;

var aTuringRef = db.collection('users').doc('aturing');

var setAlan = aTuringRef.set({
  'first': 'Alan',
  'middle': 'Mathison',
  'last': 'Turing',
  'born': 1912
});

/////sample data end/////


