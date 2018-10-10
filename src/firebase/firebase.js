import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCTvE_8Br23t54NuFlhEJ0aVHUSXNvswKA",
  authDomain: "tuition-jugard-1cba8.firebaseapp.com",
  databaseURL: "https://tuition-jugard-1cba8.firebaseio.com",
  projectId: "tuition-jugard-1cba8",
  storageBucket: "tuition-jugard-1cba8.appspot.com",
  messagingSenderId: "459173216815"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref();
export { firebase, googleAuthProvider, storage, database as default };
