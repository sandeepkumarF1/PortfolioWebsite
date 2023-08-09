import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="projects"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText">Projects</span>
            {/* <p style={{ marginTop: "10px" }}>
              Perfect solution for digital experience
            </p> */}
          </div>
          <a target="blank" href="https://github.com/sandeepkumarF1" className="secondaryText">Explore More Works</a>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="./db.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="./yt.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="./ecom.png"
            alt="project"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
