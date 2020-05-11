import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyC9HJkMDfxRT8xn-X2PJq0a5uRc56iLFYs",
    authDomain: "mirketdictionary.firebaseapp.com",
    databaseURL: "https://mirketdictionary.firebaseio.com",
    projectId: "mirketdictionary",
    storageBucket: "mirketdictionary.appspot.com",
    messagingSenderId: "861040418466",
    appId: "1:861040418466:web:908fdfeb30a5bb101041fb",
    measurementId: "G-5M5KT96WSB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;