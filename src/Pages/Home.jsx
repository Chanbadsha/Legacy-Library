import React from "react";
import Hero from "../Components/Hero";
import FeaturedArtifacts from "../Components/FeaturedArtifacts";
import { Helmet } from "react-helmet-async";

import Testimonial from "../Components/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>LegacyLibrary - Home</title>
      </Helmet>
      <Hero></Hero>

      <FeaturedArtifacts />
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
