import React from "react";
import Hero from "../Components/Hero";
import FeaturedArtifacts from "../Components/FeaturedArtifacts";
import { Helmet } from "react-helmet-async";

import Testimonial from "../Components/Testimonial";
import LatestArticles from "../Components/LatestArticles";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>LegacyLibrary - Home</title>
      </Helmet>
      <Hero></Hero>

      <FeaturedArtifacts />
      <Testimonial></Testimonial>
      <LatestArticles></LatestArticles>
    </div>
  );
};

export default Home;
