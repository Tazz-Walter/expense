import {createStore} from 'redux';

//Action Generators
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
 });
const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});
const set = ({ count }) => ({
    type: 'SET',
    count
});
const reset = () => ({
    type: 'RESET'    
});

const countReducer = (state = {count: 0}, action) => {
   switch (action.type) {
       case 'INCREMENT':            
           return {
               count: state.count + action.incrementBy
           };
       case 'DECREMENT':
           const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
           return {
               count: state.count - decrementBy
           }; 
       case 'SET':
           return {
               count: action.count
           };         
       case 'RESET': 
           return {
               count: 0
           };      
           
       default:
           return state;
   }   
};

const store = createStore(countReducer);

store.subscribe(() =>{
    console.log(store.getState());
});

//Actions - then an object that gets sent to the store

//I'd like to increment the count
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(set({count:500}));
store.dispatch(reset());
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
// store.dispatch({
//     type: 'RESET'
// });
// store.dispatch({
//     type: 'DECREMENT'
// });
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });
// store.dispatch({
//     type: 'SET',
//     count: 100
// });


//I'd like to reset the count to zero

