import './App.css';
import { useState } from 'react';
import Account from './components/Account';
import Bonus from './components/Bonus';



function App({store}) {

  // const[account,setAccout] = useState({ amount:0 });
  
  // const [points, setPoints] = useState({ value: 0 });

  

  return (
    <>
      
      <h3 style={{textAlign :'center'}}>App</h3>
      <h2>Current Amount : {store.getState().account.amount} </h2>
      <h2>Total Bonus : {store.getState().bonus.points}</h2>

      <Account store={store} />
      <Bonus store={store} />

    </>
  );
}

export default App;
