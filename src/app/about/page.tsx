import AboutBlog from "@/features/about/AboutBlog";
import Builders from "@/features/about/Builders";
import CoreValues from "@/features/about/CoreValues";
import Invitation from "@/features/about/Invitation";
import LifeInTheGarden from "@/features/about/LifeInTheGarden";
import Purpose from "@/features/about/Purpose";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <LifeInTheGarden />
      <Builders />
      <Purpose />
      <CoreValues />
      <AboutBlog />
      <Invitation />
    </div>
  );
};

export default AboutUs;
