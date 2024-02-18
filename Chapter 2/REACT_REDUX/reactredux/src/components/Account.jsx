import React from 'react'
import { useState } from 'react';
import { inc,dec,incbyamount } from '../actions';
import { useDispatch, useSelector } from 'react-redux';


const Account = ({store}) => {   

    const[value,setValue] = useState(0);

    const amount = useSelector(state=>state.account.amount);
    const points = useSelector(state=>state.bonus.points);
    const dispatch = useDispatch();

  return (
    <div className='card'>
        <h3>Account Component</h3>
        <h2>Amount :${amount}</h2>.
        
        <h2>Bonus :${points}</h2>
        <button onClick={()=>{dispatch(inc())}} >Increment +</button>
        <button onClick={()=>dispatch(dec())}>Decrement -</button>
        <input type="text" onChange={(e)=> {setValue(+e.target.value)}} />
        <button onClick={()=>dispatch(incbyamount(value))}>Increment By {value} +</button>
    </div>
  )
}

export default Account