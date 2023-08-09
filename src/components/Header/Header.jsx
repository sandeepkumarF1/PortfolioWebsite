import React, { useState } from 'react'
import css from "./Header.module.scss"
import {BiMenuAltRight, BiPhoneCall} from "react-icons/bi"
import { motion } from 'framer-motion'
import { getMenuStyles, headerVariants } from '../../utils/motion'
import useHeaderShadow from '../../hooks/useHeaderShadow';
const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow();
  return (
    <motion.div 
    initial="hidden"
    whileInView="show"
    viewport={{once : false, amount: 0.25}}
    variants={headerVariants}
    className={`xPaddings yPaddings ${css.wrapper}`} style={{boxShadow: headerShadow}}>
        <div className={`flexCenter innerWidth ${css.container}`}>
            <a href='#' className={css.name}>
                Sandeep Kumar
            </a>
            <ul className={`flexCenter ${css.menu}`}
            style={getMenuStyles(menuOpened)}
            >
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#tech">tECHNOLOGIES</a></li>
                <li><a href="#skills">SKILLS</a></li>
                <li><a href="#projects">PROJECTS</a></li>
                <li><a href="#contact">CONTACT</a></li>
                <li className={`flexCenter ${css.phone}`}>
                    <p>+91 7888772819</p>
                    <BiPhoneCall size={"40px"} />
                </li>
            </ul>
            <div className={css.menuIcon} 
            onClick={()=>{setMenuOpened((prev)=>!prev)}}>
                <BiMenuAltRight size={30} />
            </div>
        </div>
    </motion.div>
  )
}

export default Header