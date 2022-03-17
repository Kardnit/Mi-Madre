import './styles/Index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './pages';

ReactDOM.render(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>,
    document.getElementById('root')
  );
