import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
import { useSelector } from 'react-redux';
import Reward from './components/Reward';

function App() {
  const amount = useSelector(state=>state.account.amount);
  const points = useSelector(state=>state.bonus.points);
  return (
    <>
      
      <h3 style={{textAlign :'center'}}>App</h3>
      <h2>Current Amount : {amount} </h2>
      <h2>Total Bonus : {points}</h2>

      <Account />
      <Bonus />
      <Reward/>

    </>
  );
}

export default App;
