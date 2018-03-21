import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import thunk from 'redux-thunk';

//compose Combina funciones de derecha a izquierda viene dentro de redux
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSEE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer
        }),
        composeEnhancer(applyMiddleware(thunk))        
    );
    
 return store;
};
