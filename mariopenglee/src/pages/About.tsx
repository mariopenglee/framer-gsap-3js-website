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
    
    

    gsap.to(".intro", {
      scrollTrigger: {
        trigger: ".intro",
        start: "top 80%",
        end: "bottom bottom",
        scrub: 1,
      },
      opacity: 1,
      x: -20,
    });

    // show all the paragraphs in the fall2023 section one by one
    gsap.to(".fall2023 p", {
      scrollTrigger: {
        trigger: ".fall2023",
        start: "top 80%",
        end: "bottom bottom",
        scrub: 1,
        toggleActions: 'play none none reverse',
      },
      opacity: 1,
      x: -20,
      stagger: 0.2,
    });

    

      
    

    
  }, []);

  return (
    <section id="about">
      <motion.div
      className="progress-bar"
      style={{ scaleX: scrollYProgress }}
      />
      <div className = "intro">
        
        <h2>about me</h2>
        <p>
          I'm an undergrad at UCLA. <br/>
          - B.S. in Linguistics & Computer Science,  <br/>
          - B.S. in Psychology,  <br/>
          - Minor in Data Science.
        </p>
      </div>
      <p>
          I believe that technology should be <b>accessible</b>, <b>inclusive</b>, and <b>impactful</b>. <br/>
          That's why I want to research <b>Human-Centered Artificial Intelligence</b>. <br/>
      </p>

      <div className="fall2023">
        <h2>What I'm doing right now (Fall 2023)</h2>
        <p>
          At the <b> Computational Vision & Learning Lab - Supervised by Hongjing Lu,</b> <br/>
          I'm conducting in-depth analysis of the diffusion model's latent space and cross-attention maps to answer questions about their understanding of relational reasoning and spatial reasoning. <br/>
        </p>
        <p>
          At the <b> Language & Cognitive Development Lab - Supervised by Catherine Sandhofer,</b> <br/>
          I'm conducting studies on how children learn antonyms and how adults learn new spatial terms. <br/>
          Additionally, I'm using RoBERTa to model children's causal reasoning. <br/>
        </p>
        <p>
          At the <b> Language Acquisition Lab - Supervised by Megha Sundara,</b> <br/>
          I'm conducting multilingual studies on how children learn inflexions and vowel harmony in their native language. <br/>
        </p>
        <p>
          Through the Undergraduate Research Scholars Program,  <br/>
          I'm conducting a research project on second language acquisition and the role of metalearning and metacognition in language learning. <br/>
        </p>
        <p> 
          I'm running the AI Safety club at UCLA, a club dedicated to researching AI Safety. Within the club, I'm also leading the AI Safety Reading Group and the Alignment Research Team. <br/>
        </p>
        <p> 
          I'm also a Senior Editor at the Undergraduate Research Journal of Psychology at UCLA.
        </p>
        <p>
          Additionally, I'm a Software Developer for LA Blueprint, currently working on a web app for Global Green, an environmental non-profit.
        </p>
        
        <p>
          Finally, I'm founding Pocket Menu, a mobile app solution for restaurants in Argentina.
        </p>

      </div>
      
      
    </section>
  );
}

export default Story;
