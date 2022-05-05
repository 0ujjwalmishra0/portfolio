import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import ReactTooltip from "react-tooltip";

import "../../container/Skills/Skills.scss";

const SkillsItem = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div className="row">
      {skills.map((skill) => (
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
          key={skill._key}
          data-tip
          data-for={skill._id}
        >
          <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
            <img src={urlFor(skill.icon)} alt={skill.name} />
          </div>
          <ReactTooltip
            id={skill._id}
            effect="solid"
            arrowColor="#fff"
            className="skills-tooltip"
          >
            {skill.name}
          </ReactTooltip>
          <p className="skill-p-text">{skill.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsItem;
