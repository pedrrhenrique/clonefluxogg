
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Home from './pages/home/Home'
import Jerseys from './pages/jerseys/Jerseys'
import Flw from './pages/flwcollections/Flw'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/jerseys' element={<Jerseys />}></Route>
          <Route path='/flw-collection' element={<Flw />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
