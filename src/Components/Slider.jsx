import React from "react";
import { Link } from "react-router-dom";

const Slider = ({ sliderData }) => {
  const { description, image, title } = sliderData || {};
  return (
    <div
      className="hero min-h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center max-w-">
        <div className="max-w-5xl mx-auto">
          <h1 className="animate__backInDown animate_animated mb-5 xl:text-5xl lg:text-4xl text-2xl md:text-3xl font-bold">
            {title}
          </h1>
          <p className="mb-5">{description}</p>
          <div className="flex gap-4 justify-center items-center">
            <Link to={`/`}>
              <button className="btn bg-blue-500 hover:bg-blue-600 text-white text-[12px] md:text-base px-3 md:px-6 py-3 rounded-full shadow-lg font-bold transform transition duration-300 hover:scale-110">
                {/* {button} */}
              </button>
            </Link>
            <button className="btn bg-green-500 hover:bg-green-600 text-white text-[12px] md:text-base px-3 md:px-6 py-3 rounded-full shadow-lg font-bold transform transition duration-300 hover:scale-110">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;