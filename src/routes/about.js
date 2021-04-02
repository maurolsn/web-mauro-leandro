import React from "react";

import { useScrollToTop } from "hooks/scroll";
import AboutPage from "Components/pages/About";

const About = () => {
  useScrollToTop();
  return <AboutPage />;
};

export default About;
