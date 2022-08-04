import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("2022");

  const selectYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  let expensesContent = <p>No expenses found ¯\_(ツ)_/¯</p>;

  if (filteredExpenses.length > 0)
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onSelectYear={selectYearHandler} />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
