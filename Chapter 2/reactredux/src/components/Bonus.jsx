import { useState } from 'react';

function Bonus() {
  const [points, setPoints] = useState({ value: 0 });

  const increment = () => {
    setPoints({ value: points.value + 1 });
  };
  return (
    <div className="card">
        <h3>
          <b>Bonus Component</b>
        </h3>
        <h2>Total Point : ${points.value}</h2>

        <button onClick={increment}>Increment +</button>
      </div>
  );
}

export default Bonus;