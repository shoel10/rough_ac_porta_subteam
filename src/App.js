import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import Home from "./pages/home/Home";
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
               <Route exact path="/" element={<Main />}></Route>
            </Routes>
            <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
      <Footer/> 
        </BrowserRouter>
    </div>
  );
}

export default App;
