import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveNewExpenseHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpense={saveNewExpenseHandler} />
    </div>
  );
};

export default NewExpense;
