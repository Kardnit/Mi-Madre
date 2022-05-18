import './styles/Index.css';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Intro, Home, Work, Product, PatternDesign, Inspiration ,About, Contact, Panel} from './pages';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain ={domain}
    clientId={clientId}
    redirectUri={window.location.origin}>
    <Router>
      <Routes>
      <Route path="/" element={<Intro />}/>
        {/* <Route path="/Intro" element={<Intro />}/> */}
        <Route path="/Home" element={<Home />}/>
        <Route path="/Works" element={<Work />}/>
        <Route path="/Products" element={<Product />}/>
        <Route path="/PatternDesigns" element={<PatternDesign />}/>
        <Route path="/Inspiration" element={<Inspiration />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Panel" element={<Panel />}/>
      </Routes>
    </Router>
  </Auth0Provider>,
    document.getElementById('root')
  );
