import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/home/Header';
import About from './pages/About';
import MobileMenu from './components/shared/MobileMenu';
import { useMediaQuery, useTheme } from '@mui/material';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import ProjectDetail from './components/project/ProjectDetail';

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const d = new Date();

  const formatted =
    d.getDate().toString().padStart(2, '0') +
    (d.getMonth() + 1).toString().padStart(2, '0') +
    d.getFullYear();

  const hideHeaderRoutes = [`/dashboard/admin/pass/${formatted}`];

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      {isMobile && !hideHeaderRoutes.includes(location.pathname) && (
        <MobileMenu />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path={`/dashboard/admin/pass/${formatted}`}
          element={<Dashboard />}
        />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
