import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import Certifications from "./components/Certifications";
import SocialMedia from "./components/SocialMedia";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Certifications />
        <Experience />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
        <SocialMedia />
      </div>
    </BrowserRouter>
  );
};

export default App;
