import React from 'react';
import { Link } from 'react-router-dom';

//destructuring quedaria en vez de props {description, amount, createdAt}
//como en ExpenseList le pasamos los valores atraves de Spread operator(...expense) aca podemos destructurar sino 
//deberiamos usar props.description, props.amount, props.createdAt

const ExpenseListItem = ({id, description, amount, createdAt }) => (
    <div>
        <h3>Expense Note: <Link to={`/edit/${id}`}>{description}</Link></h3>
        <p>Monto: {amount} - Creado: {createdAt}</p>
    </div>
);

export default ExpenseListItem;