import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your message has been sent",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="max-w-7xl mx-auto my-12 px-6">
      <Helmet>
        <title>LegacyLibrary - Contact</title>
      </Helmet>
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
        Contact Us
      </h2>
      <p className="text-center text-gray-600 mb-12">
        If you have any questions or want to get in touch, feel free to drop us
        a message.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side - Contact Form */}
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-800 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-800 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-800 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="6"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-12 text-center">
            <p className="text-gray-600">Or reach us on social media:</p>
            <div className="flex justify-center gap-8 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://i.ibb.co.com/LCqbmZw/Email-campaign-bro.png"
            alt="Legacy Library"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
