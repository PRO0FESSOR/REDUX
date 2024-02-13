import { useState } from 'react';

function Bonus({amount,value,incrementPoints}) {
  
  return (
    <div className="card">
        <h3>
          <b>Bonus Component</b>
        </h3>
        <h2>Total Bonus : ${value}</h2>
        <h2>Total Amount : ${amount}</h2>

        <button onClick={incrementPoints}>Increment +</button>
      </div>
  );
}

export default Bonus;