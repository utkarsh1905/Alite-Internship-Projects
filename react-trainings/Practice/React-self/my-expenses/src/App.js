import React, {useState} from 'react';
import "./App.css"
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

// TODO : Move this variable to septate constant file
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Grosery',
    amount: 912,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    title: 'New TV', 
    amount: 7949, 
    date: new Date(2019, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 2947,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 4500,
    date: new Date(2021, 5, 12),
  },
];


const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) =>{

    setExpenses((prevExpenses) =>{
      return [expense,...prevExpenses]
    })

    // console.log("In App.js ")
    // console.log(expense)
    // console.log(expenses)

  }
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>React Expense Tracker.</h2>
       <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;