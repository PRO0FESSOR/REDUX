import { useState } from 'react';
import { incBonus,incbyamount } from '../actions';

function Bonus({store}) {
  
  return (
    <div className="card">
        <h3>
          <b>Bonus Component</b>
        </h3>
        <h2>Total Bonus : ${store.getState().bonus.points}</h2>
        <h2>Total Amount : ${store.getState().account.amount}</h2>

        <button onClick={()=>store.dispatch(incBonus)}>Increment +</button>
      </div>
  );
}

export default Bonus;