import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expense-context";

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No registered Expensed found"
    />
  );
}

export default AllExpenses;
