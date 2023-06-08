import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

import { GlobalStyles } from "../../constants/styles";

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
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <>
      <View style={styles.container}>
        <ExpensesSummary
          expenses={DUMMY_EXPENSES}
          periodName={expensesPeriod}
        />
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </View>
    </>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
