import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import ReactTooltip from 'react-tooltip';

import "./About2.scss";
import { urlFor, client } from "../../client";
import DownloadButton from "../../components/button/button";
import Images from "../../constants/images";
import { Timeline } from "../../components";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [resume, setResume] = useState();
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
      // setFilterAbout(experiences.filter((work) => work.tag.includes(item)));
    }, 500);
  };

  useEffect(() => {
    const aboutsQuery = '*[_type == "abouts"]';
    const resumeQuery = '*[_type == "resume"]';
    const experienceQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    const educationQuery = '*[_type == "education"]';

    client.fetch(aboutsQuery).then((data) => {
      setAbouts(data);
    });

    client.fetch(resumeQuery).then((data) => {
      setResume(data);
      // console.log(data);
      // console.log(data[0].resume.asset);
    });

    client.fetch(experienceQuery).then((data) => {
      setExperiences(data);
    });

    client.fetch(educationQuery).then((data) => {
      setEducation(data);
      setFilterAbout(education);

      console.log(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      {/* <h2 className="head-text">About <span>Me</span></h2> */}
      <section className="about-section sec-padding app__flex">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="img-box">
              <img src={Images.mobile} alt="about-img"></img>
            </div>
          </div>
          <div className="about-text">
            <p>Lorem ipsum</p>
            <h3>skills</h3>
            <div className="skills">
              {skills.map((skill) => (
                <div className="skill-item" key={skill._key}>
                  {skill.name}
                </div>
              ))}
            </div>

            <Timeline/>
            <DownloadButton />
          </div>
        </div>
      </section>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
