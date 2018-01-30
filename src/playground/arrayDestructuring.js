//ARRAY DESTRUCTURING

const address = ['1299 s Juniper St', 'phipladelphia', 'Pennsylvania', '19147'];

//matching by position
//const[street, city, state, zip] = address;

//if we don´t want to destruct all variables we can leave empty space
//we can make default also. state = 'New York'
const [, city, state = 'New York', zip] = address;

//console.log(`You are in ${address[1]} ${address[2]}. `);
console.log(`You are in ${city} ${state}. `);