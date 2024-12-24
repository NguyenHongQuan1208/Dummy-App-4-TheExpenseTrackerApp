import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/expense-context";
import { getDateMinusDays } from "../util/date";
function RecentExpenses() {
  const expensesCtx = useContext(ExpenseContext);
  4;

  const recentExpense = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });
  return (
    <ExpensesOutput expenses={recentExpense} expensesPeriod="Last 7 days" />
  );
}
export default RecentExpenses;
