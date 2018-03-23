import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({startLogout}) => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li><NavLink to="/dashboard" exact={true} activeClassName="is-active">Dashboard</NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active">Create Expense</NavLink></li>
            <li><NavLink to="/help" activeClassName="is-active">Help Page</NavLink></li>
            <li><button onClick={startLogout}>Log Out</button></li>
        </ul>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});
  
export default connect(undefined, mapDispatchToProps)(Header);