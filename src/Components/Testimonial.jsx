import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion"; // Importing framer motion
import "animate.css"; // Importing Animate.css

const Testimonial = () => {
  const testimonials = [
    {
      name: "Emily Carter",
      feedback:
        "A fascinating collection of artifacts that takes you through the pages of history!",
      location: "New York, USA",
      profileImage: "https://i.ibb.co.com/9T3GT61/female2.jpg",
      stars: 5,
    },
    {
      name: "Charlotte Miller",
      feedback:
        "Every corner of the library tells a story. I enjoyed the interactive displays and detailed explanations.",
      location: "Tokyo, Japan",
      profileImage: "https://i.ibb.co.com/jr3MVrk/Emily-Carter1.jpg",
      stars: 4,
    },
    {
      name: "William Moore",
      feedback:
        "An incredible selection of artifacts. The staff is friendly and knowledgeable, making it a memorable experience.",
      location: "Vancouver, Canada",
      profileImage: "https://i.ibb.co.com/bQTsq1x/male5.jpg",
      stars: 5,
    },
    {
      name: "Amelia Harris",
      feedback:
        "Such a wonderful place to learn about our past. I highly recommend visiting for anyone interested in history.",
      location: "Rome, Italy",
      profileImage: "https://i.ibb.co.com/8ByJP7F/female1.jpg",
      stars: 5,
    },
    {
      name: "Oliver Green",
      feedback:
        "The museum offers a great mix of educational content and interactive exhibits.",
      location: "Boston, USA",
      profileImage: "https://i.ibb.co.com/Jjk7BCp/male4.jpg",
      stars: 4,
    },
    {
      name: "Ella Thompson",
      feedback:
        "An unforgettable journey through the history of human civilization. A must-see!",
      location: "London, UK",
      profileImage: "https://i.ibb.co.com/GQnQXQC/male6.jpg",
      stars: 5,
    },
    {
      name: "Lucas Martinez",
      feedback:
        "Every exhibit is meticulously curated, offering a deep dive into ancient history.",
      location: "Madrid, Spain",
      profileImage: "https://i.ibb.co.com/QJwy656/male7.jpg",
      stars: 5,
    },
  ];

  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Visitors Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 testimonial-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1, // Adding a slight delay between each card
              }}
            >
              <div className="flex flex-col gap-2">
                {/* Left Side: Profile Image and Name */}
                <div className="flex items-center">
                  <img
                    src={testimonial.profileImage}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Right Side: Feedback and Star Rating */}
                <div className="flex flex-col items-end">
                  <p className="text-gray-700 mb-4">"{testimonial.feedback}"</p>
                  <div className="flex justify-center mb-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={`text-yellow-500 ${
                          i < testimonial.stars ? "animate__animated animate__pulse" : ""
                        }`}
                      >
                        {i < testimonial.stars ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
