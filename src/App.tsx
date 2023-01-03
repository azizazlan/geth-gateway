/* eslint-disable import/no-cycle */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Landing from './pages/Landing/Landing';
import Signin from './pages/Signin/Signin';
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
      <Route
        path="/signup"
        element={
          <>
            <Navbar />
            <Signup />
          </>
        }
      />
      <Route
        path="/signin"
        element={
          <>
            <Navbar />
            <Signin />
          </>
        }
      />
    </Routes>
  );
}
