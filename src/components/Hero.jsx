import { styles } from "../styles";
import { CyberGirl } from "./canvas";
import { info } from "../constants";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[150px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#32d3fc]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="text-cyan-300">Aleks</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {info.shortDescription}
          </p>
        </div>
      </div>

      <CyberGirl />

    </section>
  );
};

export default Hero;
