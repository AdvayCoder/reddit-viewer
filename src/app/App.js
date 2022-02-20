import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import HomePage from '../pages/HomePage/HomePage';
import InitFonts from './InitFonts/InitFonts';
import { useDispatch } from 'react-redux';
import {loadPosts} from '../features/posts/postsSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts('https://www.reddit.com/r/ProgrammerHumor.json'));
  }, [dispatch])

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
