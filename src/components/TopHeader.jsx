import React from 'react'
import '../css/topheader.css';
import {  NavLink  } from 'react-router-dom';
import Sidebar from './Sidebar';

const Topheader = () => {
  return (

    <div className='container-fluid fixed-top'>
     <div className='row top_header' >
     <div className='col-12 col-md-3 col-xl-3 col-lg-3 '>
     <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                </div>
       <div className='col-12 col-md-6 col-xl-6 col-lg-6'>
              
            <h1> AC REPAIR PORTAL</h1>
            </div>
           
            </div>
</div>
  
  )
}

export default Topheader