import React from 'react'
import { useState } from 'react';

const Account = () => {
    const[account,setAccout] = useState({ amount:0 });
    const[value,setValue] = useState(0)


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
    <div className='card'>
        <h3>Account Component</h3>
        <h2>Amount :${account.amount}</h2>
        <button onClick={incrememt} >Increment +</button>
        <button onClick={decrement}>Decrement -</button>
        <input type="text" onChange={(e)=> {setValue(+e.target.value)}} />
        <button onClick={()=>{incrementByAmount(value)}}>Increment By {value} +</button>
    </div>
  )
}

export default Account