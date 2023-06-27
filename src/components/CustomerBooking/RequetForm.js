import React from 'react'
import { ToastContainer, toast } from 'react-toastify'

export default function RequetForm() {

    function SaveButton(){
        toast.success("Successfully Submited");
      }

 
  return (
    
    <div>
        <ToastContainer theme="light" autoClose={2500}/>
        <form className='container'>
            <div className="form-group">
                <label>Enter Full Name</label> <input type="text" className="form-control" name="name" />
            </div>

            <div className="form-group">
                <label>Enter Address</label> <input type="text" className="form-control" name="address" />
            </div>

            <div className="form-group">
                <label>Enter Email</label> <input type="email" className="form-control" name="email" />
            </div>

            <div className="form-group">
                <div>Enter Phone No</div> <input type="number" className="form-control" name="phno" />
            </div>


            <div className="form-group" style={{height:'230px'}}>
                <label>Complaint</label> <input type="text" className="form-control" style={{height : "200px"}} name="complaint" />
            </div>

            <button className="btn btn-primary" onClick={SaveButton}>Submit</button>

        </form>
    </div>
  )
}
