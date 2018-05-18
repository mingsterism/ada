import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCsyLmvY72ok9R-v7CWPgOk3wZytJH34-8',
  authDomain: 'project2-4e9fa.firebaseapp.com',
  databaseURL: 'https://project2-4e9fa.firebaseio.com',
  projectId: 'project2-4e9fa',
  storageBucket: 'project2-4e9fa.appspot.com',
  messagingSenderId: '1097936885196',
};

firebase.initializeApp(config);
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

export default firebase.firestore();

