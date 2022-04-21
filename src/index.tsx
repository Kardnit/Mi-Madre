import './styles/Index.css';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Intro, Home, Work, Product, PatternDesign, Inspiration ,About, Contact, Panel} from './pages';

ReactDOM.render(
    <Router>
      <Routes>
      <Route path="/" element={<Intro />}/>
        <Route path="/Intro" element={<Intro />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Works" element={<Work />}/>
        <Route path="/Products" element={<Product />}/>
        <Route path="/PatternDesigns" element={<PatternDesign />}/>
        <Route path="/Inspiration" element={<Inspiration />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Panel" element={<Panel />}/>
      </Routes>
    </Router>,
    document.getElementById('root')
  );
