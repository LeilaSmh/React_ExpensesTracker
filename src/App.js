import Expenses from "./components/Expenses/Expenses";

const App = () => {
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
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
