import React from "react";
import { SectionWrapper } from "../hoc";
import { socialMedia } from "../constants";

const SocialMedia = () => {
  return (
    <div className="flex flex-row justify-center">
      {socialMedia.map((el, index) => (
        <a href={el.link} target="_blank" rel="noopener noreferrer" key={index}>
          <div className="mx-3">
            <img
              src={el.icon}
              alt={el.name}
              className="w-12 h-12 object-contain rounded-full"
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SectionWrapper(SocialMedia, "");
