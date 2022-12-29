/* eslint-disable import/no-cycle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import './index.css';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Signup from './pages/Signup/Signup';

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </React.StrictMode>
);
