import React from 'react'
import { useState } from 'react';

const Account = ({bonus,amount,incrememt,decrement,incrementByAmount}) => {   

    const[value,setValue] = useState(0);

  return (
    <div className='card'>
        <h3>Account Component</h3>
        <h2>Amount :${amount}</h2>
        <h2>Bonus :${bonus}</h2>
        <button onClick={incrememt} >Increment +</button>
        <button onClick={decrement}>Decrement -</button>
        <input type="text" onChange={(e)=> {setValue(+e.target.value)}} />
        <button onClick={()=>{incrementByAmount(value)}}>Increment By {value} +</button>
    </div>
  )
}

export default Account