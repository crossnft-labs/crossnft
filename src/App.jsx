import React, { useState, useEffect } from 'react';
import { Header } from './component/index';
import { Routes, Route } from 'react-router-dom'
import { Home, Trans } from './router/index';



import './App.css';

function App() {
  
  return (
      <div className='app_container'>
         <Header />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path='/launch_app/transaction' element={<Trans />} />
          </Routes>
         
      </div>
  );
}

export default App;
