import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDaLNBOm_PqKjS3mdJWEC-NX6v7gqxfmHA",
    authDomain: "socializers-259b2.firebaseapp.com",
    databaseURL: "https://socializers-259b2.firebaseio.com",
    projectId: "socializers-259b2",
    storageBucket: "socializers-259b2.appspot.com",
    messagingSenderId: "742011705647",
    appId: "1:742011705647:web:b5f3d3f860f7ddd93fa9da",
    measurementId: "G-E4JSBRHJEZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings({ timestampsInSnapshots: true });
  
  export default firebase 
