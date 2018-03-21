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
/* //EVENT TYPE
// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
}); */

/* //esta constantemente escuchando los cambios en la tabla y se 
//auto dispara cuando hay cambios
  database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
    
    snapshot.forEach(childSnapshot => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });    
    console.log(expenses);
  }); */
  
  /* database.ref('expenses')
  .once('value')
  .then((snapshot) => {
    const expenses = [];
    
    snapshot.forEach(childSnapshot => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(expenses);
  }).catch((e)=>{
    console.log('error fetching ', e);
  }); */
  
  /* 
  database.ref('expenses').push({
    description: 'rent',
    note: 'test',
    amount: '10.52',
    createdAt:  976123498763
  });
  database.ref('expenses').push({
    description: 'lunch',
    note: 'blaa',
    amount: '20.52',
    createdAt:  976123498763
  }); */


  /*para grabar datos nuevos a firebase en forma de arreglos
  database.ref('notes').push({
    title: 'lunch',
    body: 'go golum run'
  });
  
//grabando datos 
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
//removiendo datos from firebase
//una forma
/* database.ref('isSingle').remove().then(() => {
  console.log('data removed')
}).catch((e) => {
  console.log('Did not remove data', e);
});
otra forma
database.ref('isSingle').set(null); */
 //Actualizando datos
 /* database.ref().update({
   name: 'Walter', //podemos modificar
   job: 'developer', // podemos agregar
   age: null // podemos borrar
 }).then(() => {
   console.log('datos actualizados');
 }).catch((e) => {
   console.log('error ', e);
 }); */

 /* //leyendo datos de base de datos una sola vez
 database.ref().once('value')
 .then((snapshot)=>{
   const val = snapshot.val();
   console.log(val);
   })
 .catch((e)=>{
   console.log('Error leyendo datos de base de datos ', e);
 }); */

//creando Suscription onValueChange el mthod on nos devuelve subcription
/* const onValueChange = database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
}, (e) => {
  console.log('Error with data fetching', e);
});

setTimeout(() => {
  database.ref('age').set(25);
}, 2000);
//nos deSuscribe osea q no va a mostrar mas los cambios en la BD
setTimeout(() => {
  database.ref().off(onValueChange);
}, 2000);

setTimeout(() => {
  database.ref('age').set(77);
}, 2000); 
//una forma de leer datos mediante subscription
database.ref().on('value', (snapshot)=>{
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job}`);
});

*/
