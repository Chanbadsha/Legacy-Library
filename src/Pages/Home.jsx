import React from "react";
import Hero from "../Components/Hero";
import FeaturedArtifacts from "../Components/FeaturedArtifacts";
import { Helmet } from "react-helmet-async";

import Testimonial from "../Components/Testimonial";
import LatestArticles from "../Components/LatestArticles";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>LegacyLibrary - Home</title>
      </Helmet>
      {/* <Hero></Hero> */}

      <FeaturedArtifacts />
      <About></About>
      <LatestArticles></LatestArticles>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
