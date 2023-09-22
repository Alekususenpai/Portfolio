import { Fragment, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { info, projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const seasons = [
  {
    id: 1,
    level: "entry",
    name: "Season 1 - Entry Level",
  },
  {
    id: 2,
    level: "junior",
    name: "Season 2 - Junior",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deployment_link,
}) => {
  return (
    <div>
      <a href={deployment_link} target="_blank" rel="noopener noreferrer">
        <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

const Works = () => {
  const [selected, setSelected] = useState(seasons[1]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set the visibility to true when the component mounts
    setIsVisible(true);

    // Clean up by hiding the component when it unmounts
    return () => {
      setIsVisible(false);
    };
  }, []);
  return (
    <Fragment>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {info.projects}
        </motion.p>
      </div>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium leading-6 text-white mt-10">
              Choose the season
            </Listbox.Label>
            <div className="relative my-4 w-[360px]">
              <Listbox.Button className="bg-tertiary text-white relative w-full cursor-default rounded-md py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-gray-900 sm:text-sm sm:leading-6">
                <span className="ml-3 block truncate">{selected.name}</span>

                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-[#32d3fc]"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-tertiary py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {seasons.map((season) => (
                    <Listbox.Option
                      key={season.id}
                      className={({ active }) =>
                        classNames(
                          active ? "bg-gray-800 text-white" : "text-white",
                          "relative cursor-default select-none py-2.5 pl-3 pr-9"
                        )
                      }
                      value={season}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "ml-3 block truncate"
                              )}
                            >
                              {season.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-[#32d3fc]",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>

      <div className="mt-14 flex flex-wrap gap-7">
        {projects
          .filter((project) => project.level === selected.level)
          .map((project, index) => (
            <div
              className={`transition-opacity ${
                isVisible ? "opacity-100 animate-fadeInCustom" : "opacity-0"
              }`}
            >
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default SectionWrapper(Works, "");
