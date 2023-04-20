import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import AboutUs from './pages/AboutUs'
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/AboutUs' element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
