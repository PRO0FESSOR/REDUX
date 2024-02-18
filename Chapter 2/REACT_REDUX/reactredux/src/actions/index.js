
import axios from 'axios';

//account related actions 


export function GetUserAmount(id)
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

export function initUser(value){
    return {type:'init' , payload:value}
}
export function getAccountUserFullilled(value){
    return {type:'getUserFullfilled' , payload:value}    
}
export function getAccountUserRejected(error)
{
    return {type:'getUserRejected' , error:error}
}
export function getAccountUserPending(tf){
    return {type:'getUserPending' , pending:tf}
}
export function inc(){
    return {type:'increment'}
}
export function dec(){
    return {type:'decrement'}
}
export function incbyamount(value){
    return {type:'incrementbyamount' , payload:value}
}

//bonus related actions 

export function incBonus(){
    return {type:'incrementbonus'}
}
