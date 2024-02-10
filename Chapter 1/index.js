import {createStore,applyMiddleware,combineReducers} from 'redux';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import axios from 'axios';



//store
const store = createStore(
    combineReducers({
        account : AcountReducer,
        bonus : BonusReducer
    }),
    applyMiddleware(logger.default,thunk));

const history = [];


//reducer
function AcountReducer(state ={amount:1},action){
    
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

function BonusReducer(state = {points : 0},action){
    if(action.type === 'checkpoints')
    {
        return {points:state.points+1}
    }
    return state;
}


// global state

//sbscribe function to get state everytime we update it 

// store.subscribe(()=>{
//     history.push(store.getState())
//     console.log(history)
// })



//action creators

//async action 
function GetUserAmount(id)
{
    return async (dispatch,getState) => {        
        try{
            dispatch(getAccountUserPending(true))
            const {data} = await axios.get(`http://localhost:3000/account/${id}`)
            dispatch(getAccountUserFullilled(data.amount))
        }
        catch(error){
            dispatch(getAccountUserRejected(error.message))
        }        
    }    
}

function initUser(value){
    return {type:'init' , payload:value}
}

function check(){
    return {type:'checkpoints'}
}

function incAM(a)
{
    return {type:'incrementbyamount' , payload:a}
}

function getAccountUserFullilled(value){
    return {type:'getUserFullfilled' , payload:value}    
}
function getAccountUserRejected(error)
{
    return {type:'getUserRejected' , error:error}
}
function getAccountUserPending(tf){
    return {type:'getUserPending' , pending:tf}
}


//dispatch with action
setInterval(() => {
    store.dispatch(GetUserAmount(3))
}, 2000);


