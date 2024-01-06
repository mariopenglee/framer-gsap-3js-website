import React, { useEffect, useLayoutEffect, useState } from "react";
import "./About.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll } from "framer-motion";


// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function Story() {
  const { scrollYProgress } = useScroll();

   useLayoutEffect(() => {
    
    gsap.utils.toArray(".statement-item").forEach((item) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => gsap.to(item, { opacity: 1 }),
        onLeave: () => gsap.to(item, { opacity: 0.2 }),
        onEnterBack: () => gsap.to(item, { opacity: 1 }),
        onLeaveBack: () => gsap.to(item, { opacity: 0.2 }),
        markers: false,
        scrub: true,
      });
    });

    

    

   

  }, []);

  return (
    <section id="about">
      <motion.div
      className="progress-bar"
      style={{ scaleX: scrollYProgress }}
      />
      <div className = "statement">
        <div className="statement-title">
          <div className="statement-title-text">
            My Story
          </div>
        </div>
        <div className = "statement-list">
          <div className = "statement-item" 
            style={{ marginLeft: 0 }}
          >
          My name is <b>Mario</b> Peng Lee. I'm about to obtain my bachelor's degree in Linguistics & Computer Science, Psychology, and Data Science at UCLA. 
          </div>
          <div className = "statement-item">
            During this time, I've spent time as both a researcher and a software developer. 
          </div>
          <div className = "statement-item">
            Throughout this journey, I've acquired a passion for language, cognition, culture, and artificial intelligence. 
          </div>
          <div className = "statement-item">
            Now, I'm stepping into graduate school to expand my knowledge and pursue my research interests. 
          </div>
          <div className = "statement-item">
          I aim to create technology that is accessible, inclusive, understandable, and safe. 
          </div>
        </div>
    </div>

      
      
    </section>
  );
}

export default Story;
