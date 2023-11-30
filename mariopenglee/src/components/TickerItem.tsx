import React from "react";
import './TickerItem.css';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

export default function TickerItem({ project, setSelectedId, selectedId }) {
    const isSelected = selectedId === project.id;
    const fillVariants = {
        initialF: { width: 0 },
        animateF: { width: "100%" },
        exitF: { width: 0 }
    };

    return (
        
        <motion.div
            className="ticker-item"
            key={project.id}
            onClick={() => setSelectedId(project.id)}
        >
            <div 
                className="background-image"
                style={{ backgroundImage: `url(${project.image})` }}
            />
            <AnimatePresence>
                {isSelected && (
                    <motion.div
                        className="fill"
                        key={project.id}
                        layoutId={project.id}
                        variants={fillVariants}
                        initial="initialF"
                        animate="animateF"
                        exit="exitF"
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                )}
            </AnimatePresence>
            <p className="ticker-item-content"><b>{project.title}</b></p>
        </motion.div>
    );
}
