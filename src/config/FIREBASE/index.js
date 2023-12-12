import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
firebase.initializeApp({
    apiKey: "AIzaSyBCHcvNawiK79iHg5305c_LVAW_3SBPaic",
    authDomain: "helloworld-88775.firebaseapp.com",
    databaseURL: "https://helloworld-88775-default-rtdb.firebaseio.com",
    projectId: "helloworld-88775",
    storageBucket: "helloworld-88775.appspot.com",
    messagingSenderId: "720235502039",
    appId: "1:720235502039:web:b1a51aa577b1504c8dd392"
});
const FIREBASE = firebase;
export default FIREBASE;