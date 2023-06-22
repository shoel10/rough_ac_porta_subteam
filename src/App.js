import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import KeyPerformanceGraphs from "./pages/keyPerformanceGraphs/keyPerformanceGraphs";
import Footer from './components/Footer';
import AdminMainPage from './components/AdminMainPage';
import Topheader from './components/TopHeader';
import ListCustomerComponent from './components/ListCustomerComponent'
import AddCustomerComponent from './components/AddCustomerComponent';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
               <Route exact path="/" element={<Topheader />}></Route>
            </Routes>
         <Routes>
        <Route path="/" element={<KeyPerformanceGraphs />}></Route>
        
        </Routes>
     
      <Routes>
      <Route exact path="/AdminMainPage" element={<AdminMainPage/>}></Route>
      </Routes>
      
     
      <Footer/>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
