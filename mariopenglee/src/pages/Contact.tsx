import React, { useEffect, useLayoutEffect } from "react";
import "./Contact.css";
import { gsap } from "gsap";
import { motion } from "framer-motion";


function Interests() {

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


  useLayoutEffect(() => {

    

   
  }, []);

  


  return (
    <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    >
    <section id="interests">
        <p>
          Coming soon!
        </p>
     

    </section>
    </motion.div>
  );
}

export default Interests;
