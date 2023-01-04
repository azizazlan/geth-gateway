/* eslint-disable import/no-cycle */
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Landing from './pages/Landing/Landing';
import Project from './pages/Project/Project';
import Projects from './pages/Projects/Projects';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signout" element={<Signup />} />
      </Route>
      <Route path="/projects" element={<Layout />}>
        <Route index element={<Projects />} />
        <Route path=":projectId" element={<Project />} />
      </Route>
    </Routes>
  );
}
