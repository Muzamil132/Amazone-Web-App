
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA6_ejoLEQd-q4lMcdyaQh_-nfgsmsqoUk",
    authDomain: "sailaniweb.firebaseapp.com",
    databaseURL: "https://sailaniweb.firebaseio.com",
    projectId: "sailaniweb",
    storageBucket: "sailaniweb.appspot.com",
    messagingSenderId: "201649868341",
    appId: "1:201649868341:web:6239202e5cc3b53875ab7c",
    measurementId: "G-6E6GMPVBVQ"
  };
  // Initialize Firebase
    const firebaseApp= firebase.initializeApp(firebaseConfig);

    const db =firebaseApp.firestore()
    const auth =firebase.auth()


    export {
        db,auth
    }