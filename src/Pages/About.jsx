import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-semibold text-gray-800">
            About Legacy Library
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Discover the wonders of ancient artifacts and explore history like
            never before.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600">
            **Legacy Library** is an online platform dedicated to showcasing the
            rich history of ancient artifacts and cultural heritage from around
            the world. Our mission is to make history accessible to everyone by
            providing a virtual space where users can explore historical
            objects, artifacts, and relics from various civilizations and time
            periods.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600">
            We believe that history is not only something to be read about in
            books but something that should be experienced and explored
            firsthand. Our vision is to create a digital museum that allows
            individuals to connect with history in a meaningful way, fostering a
            deeper understanding of the world and its diverse cultures.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Legacy Library?
          </h2>
          <ul className="list-inside list-disc text-gray-600">
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
          </ul>
        </section>

        {/* Image Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Explore Our Artifact Collection
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <img
              src="https://i.ibb.co.com/nf3NPtg/epiphany-day-treasure-chest-with-stones-magus.jpg"
              alt="Artifact Example 1"
              className="w-80 h-52 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://i.ibb.co.com/k8Twy6Z/inca-mayan-design-sculpted-stones.jpg"
              alt="Artifact Example 2"
              className="w-80 h-52 object-fit rounded-lg shadow-lg"
            />
            <img
              src="https://i.ibb.co.com/Xt1sQmL/inca-mayan-design-sculpted-stones-1.jpg"
              alt="Artifact Example 3"
              className="w-80 h-52 object-fit rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Join Us on Our Journey
          </h2>
          <p className="text-gray-600 mb-8">
            We invite you to explore **Legacy Library** and immerse yourself in
            the fascinating world of ancient history. Whether you're a student,
            educator, or history enthusiast, there's something for everyone to
            discover. Together, let's celebrate our shared cultural heritage and
            preserve it for future generations.
          </p>
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
