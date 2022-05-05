import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";
import Images from "../../constants/images";
import DownloadButton from "../../components/button/button";
import { Timeline } from "../../components";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">About <span>Me</span></h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {/* <img src={Images.mobile}></img> */}
          <div className="app__header-skills">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              className="app__skills-header-img"
            >
              <div className="app__header-img2">
               <img src={Images.meenal2} alt="profile_bg" /> 
            <motion.img
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              src={Images.blob}
              alt="profile_circle"
              className="skill-overlay_circle"
            /> 
              </div>
            <DownloadButton className="app__header-img2"/>
            </motion.div>
            
          </div>
        </motion.div>

        <Timeline className="app__skills-exp" />
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
