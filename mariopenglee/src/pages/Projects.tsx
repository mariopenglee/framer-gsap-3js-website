import React, { useState } from "react";
import "./Projects.css";
import { motion, AnimatePresence } from "framer-motion";
import Ticker from 'framer-motion-ticker';
import TickerItem from "../components/TickerItem";
import projects from "../data/projects.json";
import ProjectPanel from "../components/ProjectPanel";



function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleItemClick = (project) => {
    console.log(project);
    setSelectedProject(project);
    setIsPanelOpen(true);
  };

  const pageVariants = {
    initial: {
      x: "100vw",
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 50
      }
    },
    in: {
      x: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 50
      }
      
    },
    out: {
      x: "-100vw",
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 50
      }
      
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1
  };


  
  return (
    <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    >
      <section id="projects">
        <h1>Projects</h1>
        <Ticker duration={20}>
        {projects.map((project, index) => (
          <TickerItem 
            key={index} 
            title={project.title} 
            description={project.description} 
            imageURL={project.imageURL}
            onClick={() => handleItemClick(project)}
            />
        ))}
      </Ticker>
      </section>
      <AnimatePresence>
      {isPanelOpen && (
        <ProjectPanel 
          project={selectedProject} 
          onClose={() => setIsPanelOpen(false)}
        />
      )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Projects;
