import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Search from './components/search/Search'
import { Navigate, Route, Routes } from 'react-router-dom';
import CardInfo from './components/cardInfo/CardInfo';
import Favorites from './components/favorites/Favorites';

function App() {
  return (
    <div className='App'>
      <Menu />
      
      <Routes>
        <Route path='/search' element={<Search />} />
        <Route path='/favourites' element={<Favorites />} />
        <Route path='/' element={<Navigate to='/search' />} />
        <Route path='/films/:filmID' element={<CardInfo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
