import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './screens/Landing';
import Projects from './pages/Projects';
import Interests from './pages/Interests';
import CustomCursor from './components/CustomCursor';
import { AnimatePresence, motion } from 'framer-motion';

import './index.css';

const App = () => {
  const constraintsRef = useRef(null)

  const location = useLocation(); // Get the current location


  
  return (
    <>
      <Navbar />
      <CustomCursor />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/interests" element={<Interests />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
