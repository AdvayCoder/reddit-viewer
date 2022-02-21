import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import HomePage from '../pages/HomePage/HomePage';
import InitFonts from './InitFonts/InitFonts';
import { useDispatch } from 'react-redux';
import { loadPosts } from '../features/posts/postsSlice';
import DetailedView from '../Components/DetailedView/DetailedView';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts('https://www.reddit.com/r/ProgrammerHumor.json?limit=100'));
  }, [dispatch]);

  return (
    <Router>
      <InitFonts />
      <NavBar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path={'/post/:id'} element={<DetailedView />} />
      </Routes>
    </Router>
  );
}

export default App;
