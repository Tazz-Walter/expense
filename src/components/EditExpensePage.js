import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { removeExpense, editExpense } from '../actions/expenses';

const EditExpensePage = (props) => {    
    return (
        <div>
        <h2></h2>
            <ExpenseForm
            //defino una nueva propiedad expense para pasarle info al componente hijo
                expense={props.expense} 
                onSubmit={(expense) => {            
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');                    
                }}
            />
            <button onClick={() => { 
                props.dispatch(removeExpense({id: props.expense.id}));
                props.history.push('/');
            }}>
            Remove</button>
        </div>
    );
};
//estamos conectando component state con redux Store. atraves de props obtengo el id 
//en state tenemos un array de expenses donde podemos buscar el id q matchee para obtener sus propiedades
const mapStateToProps = (state, props) => {
    return {
      expense: state.expenses.find((expense) => expense.id === props.match.params.id )  
    };
}

export default connect(mapStateToProps)(EditExpensePage);