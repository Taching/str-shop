import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCU9J5m86PRBt4ndgaQ-4ShKCihVEeD4iE",
  authDomain: "str-db-90a95.firebaseapp.com",
  databaseURL: "https://str-db-90a95.firebaseio.com",
  projectId: "str-db-90a95",
  storageBucket: "str-db-90a95.appspot.com",
  messagingSenderId: "553803831868",
  appId: "1:553803831868:web:996047f7ea4802a4248139",
  measurementId: "G-0F3SJ04YRC",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
