import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e2",
    description: "A Blouse",
    amount: 19.99,
    date: new Date("2023-01-24"),
  },
  {
    id: "e3",
    description: "A Phone",
    amount: 1100.99,
    date: new Date("2023-04-02"),
  },
  {
    id: "e4",
    description: "Chocolets",
    amount: 19.99,
    date: new Date("2021-07-12"),
  },
  {
    id: "e5",
    description: "A book",
    amount: 10.99,
    date: new Date("2021-08-22"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e7",
    description: "A Blouse",
    amount: 19.99,
    date: new Date("2023-01-24"),
  },
  {
    id: "e8",
    description: "A Phone",
    amount: 1100.99,
    date: new Date("2023-04-02"),
  },
  {
    id: "e9",
    description: "Chocolets",
    amount: 19.99,
    date: new Date("2021-07-12"),
  },
  {
    id: "e10",
    description: "A book",
    amount: 10.99,
    date: new Date("2021-08-22"),
  },
  {
    id: "e11",
    description: "A Umbrella",
    amount: 10.99,
    date: new Date("2023-06-07"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      let id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      let updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updateItem = { ...updateExpense, ...action.payload.data };
      let updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };
  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
