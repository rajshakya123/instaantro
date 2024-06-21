import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MobileHome } from './MobileHome';
import Home from './Home'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mobileHome" element={<MobileHome />} />
      </Routes>
    </Router>
  );
}

export default App;
