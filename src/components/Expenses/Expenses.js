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

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onSelectYear={selectYearHandler} />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
