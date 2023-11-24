import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Search from './components/search/Search'
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Menu />
      
      <Routes>
        <Route path='/search' element={<Search />} />
        <Route path='/' element={<Navigate to='/search' />} />
      </Routes>
    </div>
  );
}

export default App;
