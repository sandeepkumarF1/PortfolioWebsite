import React from 'react'
import css from './Hero.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, slideIn} from '../../utils/motion'
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`innerWidth ${css.container}`}>
            <div className={css.upperElements}>
                <motion.span
                variants={fadeIn("right", "tween", 0.2, 1)}
                className='primaryText'>
                    Hello! <br/> I'm Sandeep Kumar.
                </motion.span>
                <motion.span
                variants={fadeIn("left", "tween", 0.4, 1)}
                className='secondaryText'>
                    I love buildling web
                    <br />
                    apps from scratch.
                </motion.span>
            </div>

            <motion.div 
            variants={fadeIn("up", "tween", 0.3, 1)}
            className={css.person}>
                {/* <img src="./sandeep.png" alt="" /> */}
                <motion.img
                variants={slideIn("up", "tween", 0.5, 1.3)}
                src="./blackPng.png" alt="" />
                {/* <img src="./CoatPng.png" alt="" /> */}
            </motion.div>

            <motion.a 
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.email} href='mailto:sandeepkilife@gmail.com'>
                sandeepkumarf1@gmail.com
            </motion.a>

            <div className={css.lowerElements}>
                <motion.div 
                variants={fadeIn("right", "tween", 0.3, 1)}
                className={css.experience}>
                    <div className="primaryText">5</div>
                    <div className="secondaryText">
                        <div>Projects</div>
                        <div>from Scratch.</div>
                    </div>
                </motion.div>
                <motion.div 
                variants={fadeIn("left", "tween", 0.5, 1)}
                className={css.certificate}>
                    <img src='./certificate.png' alt='' />  
                    <span>WEB APP DEVELOPMENT </span>
                    <span>ENTHUSIAST</span>
                 </motion.div>
            </div>
        </motion.div>

    </section>
  )
}

export default Hero