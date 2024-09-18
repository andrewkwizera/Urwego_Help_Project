import {useState} from 'react'
import Layout from "../components/Layout";

const Withdraw = () => {

    const [state,setState] = useState({
        account:'',
        amount:'',
        date:'',
        description:'',
        success:'',
        error:'',
        buttonText:'Withdraw'
    });

    const {account,amount,date,description,success,error,buttonText} = state;

    const handleChange = (name)=>(e)=>{
        setState({...state,[name]:e.target.value,success:'',error:'',buttonText:'Withdraw'})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.table({account,amount,date,description})
    }

    const makeWithdraw = () => (
        <form onSubmit={handleSubmit}>
           <div className="form-group">
            <input value={account} onChange={handleChange('account')} type="text" className="form-control" placeholder="Enter account number"/>
           </div>
           <div className="form-group">
            <input value={amount} onChange={handleChange('amount')} type="number" className="form-control" placeholder="Enter amount"/>
           </div>
           <div className="form-group">
            <input value={date} onChange={handleChange('date')} type="date" className="form-control"/>
           </div>
           <div className="form-group">
            <input value={description} onChange={handleChange('description')} type="text" className="form-control" placeholder="Enter description"/>
           </div>
           <div className="form-group">
            <button className="btn btn-outline-info">{buttonText}</button>
           </div>
        </form>
    )

    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
            <h1>Withdraw amount</h1>
            {makeWithdraw()}
            <br/>
            {JSON.stringify(state)}
            <hr/>
            </div>
            
        </Layout>
    )
    }
export default Withdraw;