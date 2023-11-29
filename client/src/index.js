import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import './dist/output.css'
import App from './App';
import Navbar from './components/navbar';
import Home from './components/home';
// import Login from './components/login';
import Register from './components/register.js';
import Loginpage from './components/nn.js';
export const serverurl="http://localhost:8000"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/home' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Loginpage />} />
    </Routes>
  </Router>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
