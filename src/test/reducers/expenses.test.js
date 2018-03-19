import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should Remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not Remove expense if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '5'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: 4,
        description: 'devlight test',
        note: 'just testing',
        amount: 285,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    // expect(state.length).toBe(4);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const description = 'Dumbledor';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state[0].description).toEqual(description);
});

test('should not edit an expense', () => {
    const description = 'Dumbledor';
    const action = {
        type: 'EDIT_EXPENSE',
        id: '5',
        updates: {
            description
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});


