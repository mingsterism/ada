import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
    // Populate your firebase configuration data here.
    // Initialize Firebase
    conts config = {
        apiKey: "AIzaSyCTArX1Ny0Fr0urlj2s9ML1ussTRiHBs0E",
        authDomain: "myfristproject-7f5d7.firebaseapp.com",
        databaseURL: "https://myfristproject-7f5d7.firebaseio.com",
        projectId: "myfristproject-7f5d7",
        storageBucket: "myfristproject-7f5d7.appspot.com",
        messagingSenderId: "479688933897"
    };
    firebase.initializeApp(config);
    
});


// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database();