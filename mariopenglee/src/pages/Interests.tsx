import React, { useEffect, useLayoutEffect } from "react";
import "./Interests.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

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
          In my freetime, I'm a <a href="./music">musician</a>, <a href="./photography">photographer</a>
          , and <a href="./gamedev">game designer</a>.
        </p>

        <p>
          For fun, I like MMA, cooking, surfing, bodybuilding, skateboarding, cardistry, and many other things. I'm always eager to try new things, and expand my horizons.
        </p>
     

    </section>
    </motion.div>
  );
}

export default Interests;
