import Firebase from 'firebase';
import Vue from 'vue';
import 'firebase/firestore'
;

const config = {
  apiKey: 'AIzaSyCDnFzsRNmq5wdufxb5vfw-ZPo9cU8B3Yo',
  authDomain: 'gallahad-s-office.firebaseapp.com',
  databaseURL: 'https://gallahad-s-office.firebaseio.com',
  projectId: 'gallahad-s-office',
  storageBucket: 'gallahad-s-office.appspot.com',
  messagingSenderId: '52363642366',
};

const firebaseApp = Firebase.initializeApp(config);
firebaseApp.firestore().collection('Kingsman');
// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
