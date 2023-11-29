import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import './dist/output.css'
import App from './App';
import Navbar from './components/navbar';
import Home from './components/home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  </Router>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
