import './styles/Index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Intro, Home, Works, Products, Patterns, Inspiration ,About, Contact} from './pages';

ReactDOM.render(
    <Router>
      <Routes>
      <Route path="/" element={<Intro />}/>
        <Route path="/Intro" element={<Intro />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Works" element={<Works />}/>
        <Route path="/Products" element={<Products />}/>
        <Route path="/Patterns" element={<Patterns />}/>
        <Route path="/Inspiration" element={<Inspiration />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
    </Router>,
    document.getElementById('root')
  );
