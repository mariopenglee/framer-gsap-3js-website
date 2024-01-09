import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './screens/Landing';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CustomCursor from './components/CustomCursor';
import { AnimatePresence } from 'framer-motion';

import './index.css';

const App = () => {
  const [viewMode, setViewMode] = useState("light");

  function ToggleViewMode () {
    if (viewMode == "light")
    {
      console.log("switched to Dark Mode!");
      setViewMode("dark");
    }
    else {
      console.log("switched to Light Mode!");
      setViewMode("light");
    }
    
  };
  const location = useLocation(); // Get the current location


  
  return (
    <>
      <Navbar ToggleMode={ToggleViewMode} />
      <CustomCursor />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
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
