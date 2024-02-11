import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';



function App() {
  return (
    <>
      
      <h3 style={{textAlign :'center'}}>App</h3>
      <h2>Current Amount :</h2>
      <h2>Total Bonus :</h2>

      <Account/>
      <Bonus/>

    </>
  );
}

export default App;
