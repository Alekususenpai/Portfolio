import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";

const CertCard = ({ index, name, image, link }) => (
  <a href={link} target="_blank">
    <div className="xs:w-[240px] w-full h-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full h-full blue-violet-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] p-3 h-[280px] w-full"
        >
          <div
            className="w-full h-2/3 bg-cover bg-center rounded-[10px]"
            style={{ backgroundImage: `url(${image})` }}
          ></div>

          <h3 className="mt-4 text-white text-[15px] font-bold text-center">
            {name}
          </h3>
        </div>
      </motion.div>
    </div>
  </a>
);

const Certifications = () => {
  return (
    <div className="mt-20">
      <h3 className="text-white font-bold text-[24px]">Certifications</h3>
      <div className="mt-6 flex flex-wrap gap-10">
        {certifications.map((cert, index) => (
          <CertCard key={cert.name} index={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "");
