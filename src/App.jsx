import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <button className='position' onClick={toggleDarkMode}>Light/Dark Mode</button>
      <Routes>
        <Route path="/" element={<HomePage darkMode={darkMode} />} />
      </Routes>
    </div>
  );
}

export default App;
