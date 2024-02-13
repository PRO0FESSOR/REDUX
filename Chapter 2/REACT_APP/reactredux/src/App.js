import './App.css';
import { useState } from 'react';
import Account from './components/Account';
import Bonus from './components/Bonus';



function App() {

  const[account,setAccout] = useState({ amount:0 });
  
  const [points, setPoints] = useState({ value: 0 });

  const incrementPoints = () => {
    setPoints({ value: points.value + 1 });
  };
  const incrememt = () =>{
    setAccout({amount: account.amount+1})
  }
  const decrement = () =>{
     setAccout({amount: account.amount-1})
  }
  const incrementByAmount = (value) => {
    setAccout({amount: account.amount+value})
  }

  return (
    <>
      
      <h3 style={{textAlign :'center'}}>App</h3>
      <h2>Current Amount : {account.amount} </h2>
      <h2>Total Bonus : {points.value }</h2>

      <Account bonus={points.value} amount={account.amount} incrememt={incrememt} decrement={decrement} incrementByAmount={incrementByAmount} />
      <Bonus amount={account.amount} value={points.value} incrementPoints={incrementPoints} />

    </>
  );
}

export default App;
