import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import HomePage from '../pages/HomePage/HomePage';
import InitFonts from './InitFonts/InitFonts';

function App() {
  return (
    <Router>
      <InitFonts />
      <NavBar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
      </Routes>
    </Router>
  );
}

export default App;
