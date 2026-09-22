function createExpenseTracker(owner) {

    const expenses = [];

    return {
        addExpense: function (name, amount) {
            expenses.push({name, amount});
        },
        getTotal: function () {
            return totalExpense = expenses.reduce((total, expense) => { 
                const { amount } = expense;
                return total += amount;
            }, 0);
        },
        getExpenses: function () {
            return expenses;
        },
        getOwner: function () {
            return owner;
        },

    };

}

const expenseTracker = createExpenseTracker("Dela Cruz");

expenseTracker.addExpense("Food", 150);
expenseTracker.addExpense("Transportation", 50);
expenseTracker.addExpense("School Supplies", 100);

const juanTracker = createExpenseTracker("Juan");

juanTracker.addExpense("Kain", 100);
juanTracker.addExpense("Trans", 150);
juanTracker.addExpense("Supplies", 1000);

console.log("--- Juan ----");
console.log(juanTracker.getOwner());

console.log(juanTracker.getTotal());

console.log(juanTracker.getExpenses());

console.log("--- Dela Cruz ----");
console.log(expenseTracker.getOwner());

console.log(expenseTracker.getTotal());

console.log(expenseTracker.getExpenses());