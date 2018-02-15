export default (expenses) => {
    return expenses
    // con map pasamos a un arreglo de numeros y con reduce los acumulamos y sumamamos
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0);
};
