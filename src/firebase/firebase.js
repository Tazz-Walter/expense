import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAyNu97FumOVr-Kfz9nW9rZdmX-3ivMMG0",
    authDomain: "expensify-ef41c.firebaseapp.com",
    databaseURL: "https://expensify-ef41c.firebaseio.com",
    projectId: "expensify-ef41c",
    storageBucket: "expensify-ef41c.appspot.com",
    messagingSenderId: "557077180538"
  };
  firebase.initializeApp(config);

  const database = firebase.database();
/* 
  database.ref().set({
    name: 'walter',
    age: 31,
    isSingle: true,
    location: {
        city: 'Corrientes',
        country: 'Argentina'
    }
  }).then(() => {
      console.log('data has been saved!!');
  }).catch((error) => {
        console.log('Failed to save to firebase', error);
  });
 */

 
  console.log('I made a request to changed data on firebase');