/* eslint-disable import/no-cycle */
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Landing from './pages/Landing/Landing';
import EditProject from './pages/Project/EditProject';
import NewProject from './pages/Project/NewProject';
import Project from './pages/Project/Project';
import Projects from './pages/Projects/Projects';
import Signin from './pages/Signin/Signin';
import AdminSignin from './admin-pages/Signin/Signin';
import Dashboard from './admin-pages/Dashboard/Dashboard';
import AdminLayout from './layouts/AdminLayout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="signin" element={<Signin />} />
      </Route>
      <Route path="/projects" element={<Layout />}>
        <Route index element={<Projects />} />
        <Route path=":projectId" element={<Project />} />
        <Route path="edit/:projectId" element={<EditProject />} />
        <Route path="new" element={<NewProject />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminSignin />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
