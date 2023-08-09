import React from "react";
import { workExp } from "../../utils/data";
import css from "./Work.module.scss";
import {motion} from 'framer-motion'
import { fadeIn, staggerChildren, textVariant, textVariant2, zoomIn } from "../../utils/motion";
const Work = () => {
  return (
    <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`} >
    <a className="anchor" id="skills"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        {/* heading */}
        <motion.span variants={textVariant(0.5)} className="primaryText yPaddings">My Skills</motion.span>

        <div className={`flexCenter ${css.experiences}`}>
          {/* {workExp.map((exp, i) => {
            return (
              <motion.div variants={textVariant2} key={i} className={`flexCenter ${css.exp}`}>
                <div className={css.post}>
                  <h1>{exp.place}</h1>
                  <p>{exp.tenure}</p>
                </div>
                <div className={css.role}>
                  <h1>{exp.role}</h1>
                  <p>{exp.detail}</p>
                </div>
              </motion.div>
            );
          })} */}
          <motion.div variants={textVariant(0.5)} className={`flexCenter  ${css.exp}`}>
              {/* <h1>Frontend</h1> */}
            <div className={` ${css.post}`}>
              <div >
                <p>HTML</p>
                <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" />
              </div>
              <div >
                <p>CSS</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png" />
              </div>
              <div >
                <p>Bootstrap</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" />
              </div>
              <div >
                <p>Tailwind</p>
                <img src="https://chetannada.netlify.app/images/tailwind-css.png" />
              </div>
              <div >
                <p>Sass</p>
                <img src="https://logos-download.com/wp-content/uploads/2016/09/Sass_logo.png" />
              </div>
              <div>
                <p>Javascript</p>
                <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" />
              </div>
              {/* <div>
                <p>Material UI</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Logo_material_design.svg/2560px-Logo_material_design.svg.png" />
              </div> */}
              <div>
                <p>React JS</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
              </div>
              <div>
                <p>Redux</p>
                <img src="https://chetannada.netlify.app/images/redux.png" />
              </div>
           
            </div>
              {/* <h1>Backend</h1> */}
            <div className={` ${css.role}`}>
            <div >
                <p>Node JS</p>
                <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" />
              </div>
              <div >
                <p>Express JS</p>
                <img src="https://img.icons8.com/ios/512/express-js.png" />
              </div>
              <div >
                <p>Mongo DB</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_mongodb.svg/768px-Antu_mongodb.svg.png?20160706123547" />
              </div>
              <div >
                <p>SQL</p>
                <img src="https://www.svgrepo.com/show/13344/sql-file-format.svg" />
              </div>
              <div >
                <p>JAVA</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTHPiu8yEcd-jZbz8HJAf5lWc3FxJpSmdpiA&usqp=CAU" />
              </div>
              {/* <br /> */}
              <div >
                <p>VS Code</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" />
              </div>
              <div >
                <p>Git</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" />
              </div>
              <div >
                <p>Github</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" />
              </div>
            </div>
          </motion.div>

          <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>


            <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
            <div><div className={css.circle} style={{background: "#286F6C"}}></div></div>
            <div><div className={css.circle} style={{background: "#F2704E"}}></div></div>
            <div><div className={css.circle} style={{background: "#EEC048"}}></div></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;