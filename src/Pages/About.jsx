import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "animate.css";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <Helmet>
        <title>LegacyLibrary - About</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-12">
          <motion.h1
            className="text-3xl font-semibold text-gray-800 animate__animated animate__fadeIn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Legacy Library
          </motion.h1>
          <motion.p
            className="mt-2 text-lg text-gray-600 animate__animated animate__fadeIn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Discover the wonders of ancient artifacts and explore history like
            never before.
          </motion.p>
        </header>

        <section className="mb-12">
          <motion.h2
            className="text-2xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-gray-600 animate__animated animate__fadeIn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <span className="font-bold">Legacy Library</span> is an online platform dedicated to showcasing the
            rich history of ancient artifacts and cultural heritage from around
            the world. Our mission is to make history accessible to everyone by
            providing a virtual space where users can explore historical
            objects, artifacts, and relics from various civilizations and time
            periods.
          </motion.p>
        </section>

        <section className="mb-12">
          <motion.h2
            className="text-2xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Our Vision
          </motion.h2>
          <motion.p
            className="text-gray-600 animate__animated animate__fadeIn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            We believe that history is not only something to be read about in
            books but something that should be experienced and explored
            firsthand. Our vision is to create a digital museum that allows
            individuals to connect with history in a meaningful way, fostering a
            deeper understanding of the world and its diverse cultures.
          </motion.p>
        </section>

        <section className="mb-12">
          <motion.h2
            className="text-2xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            Why Choose Legacy Library?
          </motion.h2>
          <motion.ul
            className="list-inside list-disc text-gray-600 animate__animated animate__fadeIn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <li>
              Access to Rare Artifacts: Explore ancient objects from
              civilizations you may not have heard of, all presented with
              detailed descriptions and historical context.
            </li>
            <li>
              Educational Experience: Dive deep into the history behind each
              artifact and learn about its cultural and historical significance.
            </li>
            <li>
              Virtual Museum: Experience the wonders of the ancient world
              without leaving the comfort of your home.
            </li>
            <li>
              Free and Open Access: Our platform is available to anyone
              interested in learning about history, without any cost or
              barriers.
            </li>
          </motion.ul>
        </section>

        {/* Image Section */}
        <section className="mb-12">
          <motion.h2
            className="text-2xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
          >
            Explore Our Artifact Collection
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-8">
            <motion.img
              src="https://i.ibb.co/nf3NPtg/epiphany-day-treasure-chest-with-stones-magus.jpg"
              alt="Artifact Example 1"
              className="w-80 h-52 object-cover rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 1 }}
            />
            <motion.img
              src="https://i.ibb.co/k8Twy6Z/inca-mayan-design-sculpted-stones.jpg"
              alt="Artifact Example 2"
              className="w-80 h-52 object-fit rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.5, duration: 1 }}
            />
            <motion.img
              src="https://i.ibb.co/Xt1sQmL/inca-mayan-design-sculpted-stones-1.jpg"
              alt="Artifact Example 3"
              className="w-80 h-52 object-fit rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5, duration: 1 }}
            />
          </div>
        </section>

        <section className="text-center">
          <motion.h2
            className="text-2xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.5, duration: 1 }}
          >
            Join Us on Our Journey
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-8 animate__animated animate__fadeIn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 6, duration: 1 }}
          >
            We invite you to explore <span className="font-bold">Legacy Library</span> and immerse yourself in
            the fascinating world of ancient history. Whether you're a student,
            educator, or history enthusiast, there's something for everyone to
            discover. Together, let's celebrate our shared cultural heritage and
            preserve it for future generations.
          </motion.p>
          <Link
            to="/contact"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
