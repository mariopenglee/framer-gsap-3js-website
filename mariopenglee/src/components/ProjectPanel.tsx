// ProjectDetailPanel.tsx
import React from "react";
import "./ProjectPanel.css"; // Ensure this CSS file is created for styling
import { motion } from "framer-motion";
import projects from "../data/projects.json";
import otherprojects from "../data/other_projects.json";
import Ticker from "framer-motion-ticker";


export default function ProjectPanel({ projectId, onClose, otherProject }) {
  const project = otherProject ? otherprojects.find((project) => project.id === projectId) : projects.find((project) => project.id === projectId);
    // If no project is selected, don't render the component
    if (!project) return null;

    const panelVariants = {
        initial: {
            width: "50%",
            height: "50%",
            opacity: 0,
            transition: {
                duration: 1,
                type: "spring",
                stiffness: 40
            }
        },
        animate: {
            width: "100%",
            height: "100%",
            opacity: 1,
            transition: {
                duration: 1,
                type: "spring",
                stiffness: 40
            }
        }
    };

    return (
              <motion.div
                  className="project-panel"
                  key = {projectId}
                  variants={panelVariants}
                  layoutId= {projectId}
                  initial="initial"
                  animate="animate"
                  exit="initial"
                  transition={{ duration: 0.5, ease: "easeOut" }}
              >
             
                  
                    <div className="project-panel-content">
                      
                        <img className="project-panel-image" src={project.image} alt={project.title} /> 
                
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>

                      {
                        project.skills &&
                          (<Ticker duration={10}>
                            {project.skills.map((skill, index) => (
                              <div className="project-panel-skill" key={index}>
                                {skill}
                              </div>
                            ))}
                          </Ticker>)
                      }
                      <div className="project-panel-links">
                        {project.links &&
                          project.links.map((link, index) => (
                          
                              link.link === "n/a" ?
                              <motion.button className="project-panel-button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} key={index} disabled>
                                {link.name}
                              </motion.button>
                              :
                              <motion.button className="project-panel-button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => window.open(link.link, "_blank")} key={index}>
                                {link.name}
                              </motion.button>
                          
                          ))}
                      </div>

                      <motion.button onClick={onClose} className="project-panel-close">
                        X
                      </motion.button>
                    </div>
                  
                  
              </motion.div>
  );

};
