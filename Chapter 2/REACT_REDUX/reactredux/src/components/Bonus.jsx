import { useState } from 'react';
import { incBonus,incbyamount } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

function Bonus({store}) {

  const amount = useSelector(state=>state.account.amount);
  const points = useSelector(state=>state.bonus.points);
  const dispatch = useDispatch();
  
  return (
    <div className="card">
        <h3>
          <b>Bonus Component</b>
        </h3>
        <h2>Total Bonus : ${points}</h2>
        <h2>Total Amount : ${amount}</h2>

        <button onClick={()=>dispatch(incBonus)}>Increment +</button>
      </div>
  );
}

export default Bonus;