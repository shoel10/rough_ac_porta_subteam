import React from 'react'
import '../css/topheader.css';
// import {  NavLink  } from 'react-router-dom';
import Sidebar from './Sidebar';

const Topheader = () => {
  return (

    <div className='container-fluid fixed-top'>
     <div className='row top_header' >
     <div className='col-12 col-md-2 col-xl-1 col-lg-2 ' style={{flex: '0 0 12%'}}>
     <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div>
     <div className='col-15 col-md-8 col-xl-8 col-lg-8'>
        
        <div className="container-Project-Name" style={{textAlign : 'left', height : '60px', width : '110%'}}>
            <h1> AC REPAIR PORTAL</h1>
        </div>
            
      </div>
      <div className='col-1 col-md-1 col-xl-1 col-lg-1'>
        <div className="container-Project-item" >
            <h3> About</h3>
        </div>
      </div>
      <div className='col-1 col-md-1 col-xl-1 col-lg-1'>
        <div className="container-Project-item" >
            <h3> Contact</h3>
        </div>
      </div>
      <div className='col-1 col-md-1 col-xl-1 col-lg-1' >
      <button type="button" className="btn btn-primary" href='/'>
                  Login</button>
      </div>
           
     </div>
  </div>
  
  )
}

export default Topheader