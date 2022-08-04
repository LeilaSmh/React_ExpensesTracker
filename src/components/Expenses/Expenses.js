import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("2022");

  const selectYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onSelectYear={selectYearHandler} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
