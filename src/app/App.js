import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import HomePage from '../pages/HomePage/HomePage';
import Fonts from '../Components/NavBar/Fonts/Fonts';

function App() {
  return (
    <Router>
      <Fonts />
      <NavBar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
      </Routes>
    </Router>
  );
}

export default App;
