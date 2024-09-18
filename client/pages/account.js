import {useState} from 'react'
import Layout from "../components/Layout";
import axios from 'axios'
const Account = () => {

    const [state,setState] = useState({
        accountNumber:'',
        firstName:'',
        lastName:'',
        success:'',
        error:'',
        buttonText:'Save'

    })

    const {accountNumber,firstName,lastName,success,error,buttonText} = state;

    const handleChange = (name) => (e) =>{
        setState({...state,[name]:e.target.value,error:'',success:'',buttonText:'Save'})
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        // console.table({account,firstName,lastName})
        axios.
        post(`http://localhost:8000/api/account`,{
            accountNumber,firstName,lastName
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    const creatAccount = () => (
        <form onSubmit={handleSubmit}>
           <div className="form-group">
            <input value={accountNumber} onChange={handleChange('accountNumber')} type="text" className="form-control" placeholder="Enter account number"/>
           </div>
           <div className="form-group">
            <input value={firstName} onChange={handleChange('firstName')} type="text" className="form-control" placeholder="Enter first name"/>
           </div>
           <div className="form-group">
            <input value={lastName} onChange={handleChange('lastName')} type="text" className="form-control" placeholder="Enter last name"/>
           </div>
           <div className="form-group">
            <button className="btn btn-outline-info">{buttonText}</button>
           </div>
           <br/>
           
        </form>
    )

    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
            <h1>Create an account</h1>
            {creatAccount()}
            <br/>
            {JSON.stringify(state)}
            <hr/>
            </div>
            
        </Layout>
    )
};

export default Account;