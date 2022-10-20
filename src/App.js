//react imports
import React, { useState, useEffect } from "react";

import './App.css';
import Boards from './boards/Boards';
import Navbar from './navbar/Navbar';
import Settings from './settings/Settings';
import './styles.css'
import { Route, Routes } from 'react-router-dom';
import Register from './register/Register';
import Login from './login/Login';
import {DndProvider} from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  
  return (
    <DndProvider backend={HTML5Backend}>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Boards />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
      </DndProvider>

  );
}

export default App;
