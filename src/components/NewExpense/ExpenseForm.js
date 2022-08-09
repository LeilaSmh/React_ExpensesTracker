import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  //---  Alternative  ---
  //   const [userInput, setUserInput] = useState({
  //     title: '',
  //     amount: '',
  //     date: '',
  //   });

  //   const titleChangeHandler = event => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, title: event.target.value };
  //     });
  //   };
  //   const amountChangeHandler = event => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, amount: event.target.value };
  //     });
  //   };
  //   const dateChangeHandler = event => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, date: event.target.value };
  //     });
  //   };

  const submitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSaveNewExpense(newExpense);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
