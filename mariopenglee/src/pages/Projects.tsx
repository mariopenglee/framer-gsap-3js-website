import React, { useState } from "react";
import "./Projects.css";
import { motion, AnimatePresence } from "framer-motion";
import Ticker from 'framer-motion-ticker';
import TickerItem from "../components/TickerItem";
import projects from "../data/projects.json";
import otherprojects from "../data/other_projects.json";
import ProjectPanel from "../components/ProjectPanel";



function Projects() {

  const [selectedId, setSelectedId] = useState(null);
  console.log(selectedId);
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
        <h3>Research Projects</h3>
        <Ticker duration={20}>
        {projects.map((project) => (
        <div key={project.id.toString()}>
            <TickerItem 
                project={project} 
                key={project.id.toString()}
                setSelectedId={setSelectedId}
                selectedId={selectedId}
            />
        </div>
    ))}
        </Ticker>
        <h3>Game Dev</h3>
        <Ticker duration={15}>
        {otherprojects.map((project) => (
        <div key={project.id.toString()}>
            <TickerItem 
                project={project} 
                key={project.id.toString()}
                setSelectedId={setSelectedId}
                selectedId={selectedId}
            />
        </div>
    ))}
    </Ticker>
      </section>
      <AnimatePresence mode= "wait">
        {selectedId && (
          <ProjectPanel
            projectId={selectedId}
            onClose={() => setSelectedId(null)}
            otherProject={selectedId > 10}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Projects;
