import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`} id="contact">
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:sandeepkilife@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Contact me</span>
            <p>Reach out to me!</p>
          </div>
          <ul className={css.menu}>
            <a target="blank" href="https://www.linkedin.com/in/sandeep-kumar-f1/"><button>Linkedin</button></a>
            <a target="blank" href="https://github.com/sandeepkumarF1"><button>Github</button></a>
            <a target="blank" href="mailto:sandeepkilife@gmail.com"><button>Email</button></a>
            {/* <li>Experience</li> */}
          </ul>
        </div>
        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Jalandhar, Punjab, INDIA</p>
          </div>
          <ul className={css.menu}>
            <a href="#about">About</a>
            <a href="#tech">Technologies</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;