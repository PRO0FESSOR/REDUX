export function AcountReducer(state ={amount:1},action){
    
    if(action.type==='getUserFullfilled')
    {
        return {amount:action.payload , pending:false}
    }
    if(action.type==='getUserRejected')
    {
        return {...state,error:action.error,pending:false}
    }
    if(action.type==='getUserPending')
    {
        return {...state,pending:action.pending}
    }
    if(action.type==='increment')
    {
        return {amount: state.amount+1}
    }
    if(action.type==='decrement')
    {
        return {amount: state.amount-1}
    }
    if(action.type==='incrementbyamount')
    {
        return {amount: state.amount + action.payload}
    }
    
    return state;
}
