import logo from './logo.svg';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FullPageScroll from './FullPageScroll';
import Store from './Store';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Store />} />
    </Routes>
  );
}

export default App;
