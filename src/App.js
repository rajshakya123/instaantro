import React from 'react';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import { Home } from './Home';
import Home1 from './Home1'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home1 />} />
        <Route exact path="/Home1" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
