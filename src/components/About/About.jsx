import React from "react";
import { projectExperience, WhatDoIHelp } from "../../utils/data";
import css from "./About.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion.js";
const About = () => {
  return (
    <section className={css.wrapper}>
      <a className="anchor" id="about"></a>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
      >
        {/* left side */}
        <motion.div 
            variants={fadeIn("up", "tween", 0.3, 1)} className={`yPaddings ${css.leftSide}`}>
          <img src="./sandeep.png" alt="" />
        </motion.div>

        {/* right */}
        <motion.div variants={textVariant(0.5)} className={css.rightSide}>
          <span className="primaryText">About me </span>
          <span className="secondaryText">
            Namaste! I'm Sandeep Kumar, a Front-End Web App Developer who loves
            working with React.js technology. I have a degree in Computer
            Science (B.Tech) and a strong passion for creating awesome digital
            stuff. I enjoy solving problems and building web applications that
            look great and work smoothly. I always keep up with the latest
            trends and techniques in web development to stay ahead of the game.
            {/* Collaborating with others is something I really enjoy, and I believe
            that working together brings out the best results.
             I like to keep
            things clean and organized when it comes to coding, making sure
            everything runs super fast and efficiently. I'm always eager to
            learn and grow, taking on new challenges with enthusiasm. Sharing my
            knowledge and helping others learn is something I find fulfilling.
            If you're interested in creating cool web experiences or want to
            team up on exciting projects, feel free to reach out! Let's connect
            and build amazing things together! */}
          </span>

          {/* <span className='primaryText'>What do I help? </span>
                {WhatDoIHelp.map((paragraph, i)=> <span className='secondaryText' key={i}>{paragraph}</span>)} */}

          {/* <div className={`flexCenter ${css.stats}`}>
                    <div className={`flexCenter ${css.stat}`}>
                        <span className='primaryText'>285+</span>
                        <span className='secondaryText'>Project Completed</span>
                    </div>
                    <div className={`flexCenter ${css.stat}`}>
                        <span className='primaryText'>190+</span>
                        <span className='secondaryText'>Happy Clients</span>
                    </div>
                </div> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
