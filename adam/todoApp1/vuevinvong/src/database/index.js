import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDOq_DzG1YmYgITVOC8r45-aGYILkX20Ak",
    authDomain: "myfirstdata-ae710.firebaseapp.com",
    databaseURL: "https://myfirstdata-ae710.firebaseio.com",
    projectId: "myfirstdata-ae710",
    storageBucket: "myfirstdata-ae710.appspot.com",
    messagingSenderId: "1003503118411"

};

firebase.initializeApp(config);
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

export default firebase.firestore();

