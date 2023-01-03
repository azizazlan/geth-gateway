/* eslint-disable import/no-cycle */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Landing from './pages/Landing/Landing';
import Signup from './pages/Signup/Signup';

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Landing />
          </>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
