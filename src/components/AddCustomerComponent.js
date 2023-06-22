import React, { useEffect, useState } from 'react'
import {Link,useNavigate,useParams} from 'react-router-dom';
import CustomerService from '../services/CustomerService'

const AddCustomerComponent = () => {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[phone_no,setPhone_no]=useState('')
    
   
    const navigate=useNavigate();
    const {id}=useParams();

    const saveCustomer=(e)=>{
        e.preventDefault();
        const customer={name,email,phone_no}
        if(id){
            CustomerService.updateCustomer(id,customer).then((response)=>{
                navigate('/customers')
            }).catch(error=>{
                console.log(error)
               
            })
        }
         else{
         CustomerService.createCustomer(customer).then((response)=>{
            console.log(response.data);
            navigate('/customers')
        }).catch(error=>{
            console.log(error)
           
        })
    }
}
    useEffect(() => {

        CustomerService.getCustomerById(id).then((response) =>{
            setName(response.data.name)
            setEmail(response.data.email)
            setPhone_no(response.data.phone_no)
            
        }).catch(error => {
            console.log(error)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const title = () => {

        if(id){
            return <h2 className = "text-center">Update customer</h2>
        }else{
            return <h2 className = "text-center">Add customer</h2>
        }
    }
  return (
    <div>
        <br></br>
      <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    title()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                          <label className='form-label'>Name :</label>
                          <input
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                className='form-control'
                                value={name}
                                onChange={(e)=>setName(e.target.value)}></input>  
                        </div>
                        <div className = "form-group mb-2">
                                    <label className = "form-label">Email Id :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "email"
                                        className = "form-control"
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                        </div>
                        <div className = "form-group mb-2">
                                    <label className = "form-label">Phone number :</label>
                                    <input
                                        type = "phone_no"
                                        placeholder = "Enter phone number"
                                        name = "phone_no"
                                        className = "form-control"
                                        value = {phone_no}
                                        onChange = {(e) => setPhone_no(e.target.value)}
                                    >
                                    </input>
                        </div>
                       
                        <button className='btn btn-success' onClick={(e)=>saveCustomer(e)}>Submit</button>
                        <Link to="/customers" className='btn btn-danger'>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddCustomerComponent
