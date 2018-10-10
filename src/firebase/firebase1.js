import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC1iO-7I_mykQkQ3oW70vCENZoDs-URgpo",
  authDomain: "aoat-ff02c.firebaseapp.com",
  databaseURL: "https://aoat-ff02c.firebaseio.com",
  projectId: "aoat-ff02c",
  storageBucket: "aoat-ff02c.appspot.com",
  messagingSenderId: "615959651375"
};

firebase.initializeApp(config);

const database = firebase.database();
database.ref().set({
  name:'Nilakantha',
  mobileNo: '9916164166'
})

