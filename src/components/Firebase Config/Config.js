import * as firebase from 'firebase';

  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyDYui2W6oWkwEJ09qGkf3RoJ2Var4i42hM",
    authDomain: "hackatonhere-4ee65.firebaseapp.com",
    databaseURL: "https://hackatonhere-4ee65.firebaseio.com",
    projectId: "hackatonhere-4ee65",
    storageBucket: "hackatonhere-4ee65.appspot.com",
    messagingSenderId: "757563776799",
    appId: "1:757563776799:web:ee55bf72f5d68bb4"
  };
  firebase.initializeApp(config);
  
  export const ref = firebase.database().ref()
  export const auth = firebase.auth
  export const facebookProvider = new firebase.auth.FacebookAuthProvider()