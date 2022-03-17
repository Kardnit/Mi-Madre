import './styles/Index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, About} from './pages';

ReactDOM.render(
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>,
    document.getElementById('root')
  );
