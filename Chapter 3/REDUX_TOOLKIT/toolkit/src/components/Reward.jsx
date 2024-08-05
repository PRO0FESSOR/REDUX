import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementByAmount } from '../reducers/reward';

function Reward({store}) {

  const points = useSelector(state=>state.reward.points);
  const dispatch = useDispatch();
  
  return (
    <div className="card">
        <h3>
          <b>Reward Component</b>
        </h3>
        <h2>Total Rewars : ${points}</h2>

        <button onClick={()=>dispatch(increment())}>Increment +</button>
        <button onClick={()=>dispatch(incrementByAmount())}>Increment By 10+</button>
      </div>
  );
}

export default Reward;