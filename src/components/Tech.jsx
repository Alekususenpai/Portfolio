import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const SkillCard = ({ index, name, icon }) => (
  <div className="xs:w-[130px] w-[123px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.4, 0.85)}
      className="w-full accent-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] p-3 min-h-[140px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[15px] font-bold text-center">{name}</h3>
      </div>
    </motion.div>
  </div>
);

const Tech = () => {
  return (
    <div className="mx-5 lg:mx-20">
      <h3 className="text-white font-bold text-[24px]">Skill set</h3>
      <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-10">
        {technologies.map((tech, index) => (
          <SkillCard key={tech.name} index={index} {...tech} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
