import { styles } from "../styles";
import { CyberGirl } from "./canvas";
import { info } from "../constants";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[150px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="text-accent">Aleks</span>
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
