// ProjectDetailPanel.tsx
import React from "react";
import "./ProjectPanel.css"; // Ensure this CSS file is created for styling
import { motion } from "framer-motion";

const ProjectDetailPanel = ({ project, onClose }) => {

    const panelVariants = {
        hidden: {
          opacity: 0,
          scale: 0.8
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5
          }
        },
        exit: {
          opacity: 0,
          scale: 0.8,
          transition: {
            duration: 0.5
          }
        }
      };
      



    // If no project is selected, don't render the component
    if (!project) return null;

    return (
        <motion.div
            className="project-panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            
        >
        <button onClick={onClose} className="close-button">X</button>
        <h2>{project.title}</h2>
        {/* Add more project details here */}
        </motion.div>
    );
};

export default ProjectDetailPanel;
