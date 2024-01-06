import React from "react";
import './TickerItem.css';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

export default function TickerItem({ project, setSelectedId, selectedId }) {

    return (
        
        <motion.div
            className="ticker-item animatable"
            key={project.id}
            onClick={() => setSelectedId(project.id)}
        >
            <span>{project.title}</span>
        </motion.div>
    );
}
