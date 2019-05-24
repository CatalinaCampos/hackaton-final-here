import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBTSjW_eM_kZfP43notKCkbdDiD4AiZ_AY",
    authDomain: "vive-cultura-hackaton.firebaseapp.com",
    databaseURL: "https://vive-cultura-hackaton.firebaseio.com",
    projectId: "vive-cultura-hackaton",
    storageBucket: "vive-cultura-hackaton.appspot.com",
    messagingSenderId: "905226943968",
    appId: "1:905226943968:web:4c0f3346fabb0b83"
};
firebase.initializeApp(config);

export const database = firebase.database();