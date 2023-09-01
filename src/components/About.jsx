import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { info } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tech } from ".";
import Certifications from "./Certifications";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <>
          {info.overview}
          <p className="mt-5">{info.cta}</p>
        </>
      </motion.p>

      <Tech />
      <Certifications />
    </>
  );
};

export default SectionWrapper(About, "about");
