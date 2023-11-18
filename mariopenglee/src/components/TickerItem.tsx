import React from "react";
import './TickerItem.css';
import { motion, AnimatePresence } from "framer-motion";

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
                        variants={fillVariants}
                        initial="initialF"
                        animate="animateF"
                        exit="exitF"
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                )}
            </AnimatePresence>
            <span className="ticker-item-content">{project.title}</span>
        </motion.div>
    );
}
