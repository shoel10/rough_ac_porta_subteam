import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
               <Route exact path="/" element={<Main />}></Route>
               
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
