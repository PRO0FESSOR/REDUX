import { useAddAccountMutation, useDeleteAccountMutation, useGetAccountsQuery, useUpdateAccountMutation } from '../api/adminSlice';


function Admin() {

    const {data} = useGetAccountsQuery();
    const [addAccount]  = useAddAccountMutation();  
    const [deleteAccount] = useDeleteAccountMutation();
    const [updateAccount] = useUpdateAccountMutation();   

  return (
    <div className="card">
    <h3>
    <b>Admin Component</b>
    </h3>
    {data && data.map(account=><p>{account.id} : {account.amount}
      <button onClick={()=>deleteAccount(account.id)}>delete</button> 
      <button onClick={()=>updateAccount({id:account.id,amount:77777})}>update</button> </p>)}
    <button onClick={()=>addAccount(1400)}>add account</button>
     </div>
  );
}

export default Admin;
