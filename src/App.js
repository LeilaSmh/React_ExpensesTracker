import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "i1",
      title: "Toothbrush",
      amount: 30,
      date: new Date(2022, 7, 1),
    },
    {
      id: "i2",
      title: "Toothpaste",
      amount: 67.5,
      date: new Date(2022, 7, 1),
    },
    {
      id: "i3",
      title: "Toilet Paper",
      amount: 39.99,
      date: new Date(2022, 7, 1),
    },
  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
