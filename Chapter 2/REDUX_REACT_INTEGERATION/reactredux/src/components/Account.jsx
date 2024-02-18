import React from 'react'
import { useState } from 'react';
import { inc,dec,incbyamount } from '../actions';

const Account = ({store}) => {   

    const[value,setValue] = useState(0);

  return (
    <div className='card'>
        <h3>Account Component</h3>
        <h2>Amount :${store.getState().account.amount}</h2>.
        
        <h2>Bonus :${store.getState().bonus.points}</h2>
        <button onClick={()=>{store.dispatch(inc())}} >Increment +</button>
        <button onClick={()=>store.dispatch(dec())}>Decrement -</button>
        <input type="text" onChange={(e)=> {setValue(+e.target.value)}} />
        <button onClick={()=>store.dispatch(incbyamount(value))}>Increment By {value} +</button>
    </div>
  )
}

export default Account