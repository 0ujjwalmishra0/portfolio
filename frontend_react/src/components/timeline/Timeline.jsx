import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import "./Timeline.scss";
import {client} from '../../client';
import SkillsItem from "../SkillsItem/SkillsItem";

const Timeline = () => {
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  let [filterAbout, setFilterAbout] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [activeFilter, setActiveFilter] = useState("education");

  const handleAboutFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "work") setFilterAbout(experiences);
      else if (item === "education") setFilterAbout(education);
    }, 500);
  };

  useEffect(() => {
    const experienceQuery = '*[_type == "experiences"]';
    const educationQuery = '*[_type == "education"]';
    const skillsQuery = '*[_type == "skills"]';


    client.fetch(experienceQuery).then((data) => {
      // sort data according to index
      data.sort((a, b) =>{
        return a.index - b.index;
      });
      setExperiences(data);
    });

    client.fetch(educationQuery).then((data) => {
      // sort data according to index
      data.sort((a, b) =>{
        return a.index - b.index;
      });

      setEducation(data);
      setFilterAbout(data);

      console.log(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div className="about-text">
    <p id="about-p-text" className="p-text">
      I'm a UI/UX designer, with a strong passion for creating unique, creative, and innovative wireframe designs and
      artworks. I try to assemble together images, typography, or motion graphics to create a piece of design
      and also create websites and mobile application wireframes with prototyping.
      </p>
      <SkillsItem/>
  
      <div className="about-tabs">
        <button
          type="button"
          className={`tab-item ${activeFilter === "education" ? "active" : ""}`}
          data-target="#education"
          key="button-education"
          onClick={() => handleAboutFilter("education")}
        >
          education
        </button>
        <button
          type="button"
          className={`tab-item ${activeFilter === "work" ? "active" : ""}`}
          data-target="#work"
          key="button-work"
          onClick={() => handleAboutFilter("work")}
        >
          experience
        </button>
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.3, delayChildren: 0.3 }}
      >
        {/* Education Start */}
        <div
          className={`tab-item ${activeFilter === "education" ? "active" : ""}`}
          id="education"
        >
          {activeFilter === "education" ? (
            <div className="timeline">
              {filterAbout.map((education) => (
                <>
                  <motion.div
                    className="timeline-item"
                    key={education._key}
                    whileInView={{ scale: [0.95, 1] }}
                    whileHover={{ scale: [1, 0.95] }}
                    transition={{ duration: 0.5 }}
                    data-tip
                    data-for={education._id}
                  >
                    <span className="date">{education.year}</span>
                    <h4> {education.school}</h4>
                    <p> {education.board} | {education.location} </p>
                  </motion.div>

                  <ReactTooltip
                    id={education._id}
                    effect="solid"
                    arrowColor="#fff"
                    place="left"
                    // offset={{ right: -10 }}
                    className="skills-tooltip"
                  >
                    {education.desc}
                  </ReactTooltip>
                </>
              ))}
            </div>
          ) : (
            <div />
          )}
        </div>

        {/* Experience Start */}

        <div
          className={`tab-item ${activeFilter === "work" ? "active" : ""}`}
          id="work"
        >
          {activeFilter === "work" ? (
            <div className="timeline">
              {filterAbout.map((work) => (
                <>
                  <motion.div
                    className="timeline-item"
                    key={work._key}
                    whileInView={{ scale: [0.95, 1] }}
                    whileHover={{ scale: [1, 0.95] }}
                    transition={{ duration: 0.5 }}
                    data-tip
                    data-for={work._id}
                  >
                    <span className="date">{work.year}</span>
                    <h4> {work.company}</h4>
                    <p> {work.position} | {work.location} </p> 
                  </motion.div>

                  <ReactTooltip
                    id={work._id}
                    effect="solid"
                    arrowColor="#fff"
                    place="left"
                    className="skills-tooltip"
                  >
                    {work.desc}
                  </ReactTooltip>
                </>
              ))}
            </div>
          ) : (
            <div />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Timeline;
