import React from "react";
import { motion } from "framer-motion";
import "animate.css";

const LatestArticles = () => {
  const articles = [
    {
      title: "The Evolution of Artifacts in History",
      description:
        "Explore how artifacts have played a crucial role in understanding historical events.",
      link: "https://philarchive.org/archive/HEEHOM",
    },
    {
      title: "Modern Technology and Ancient Artifacts",
      description:
        "Learn about the fascinating intersection of modern technology and ancient discoveries.",
      link: "https://magazine.byu.edu/article/modern-technology-gives-new-life-to-ancient-treasures/",
    },
    {
      title: "The Importance of Preserving Historical Sites",
      description:
        "Why it is crucial to preserve historical landmarks and artifacts for future generations.",
      link: "https://aithor.com/essay-examples/the-importance-of-preserving-heritage-sites-for-future-generations",
    },
    {
      title: "Unveiling the Secrets of Ancient Civilizations",
      description:
        "Discover the secrets behind ancient civilizations and their lasting impact on the world.",
      link: "https://medium.com/@g.shevtsov1989/unveiling-the-mysteries-of-ancient-civilizations-a-journey-through-time-74e4376199fa",
    },
    {
      title: "Exploring the Role of Museums in Education",
      description:
        "Learn about the pivotal role museums play in educating the public about history and culture.",
      link: "https://journals.ekb.eg/article_303614_8a183783355502845fc3fd485d4e8246.pdf",
    },
    {
      title: "The Future of Digital Preservation of Artifacts",
      description:
        "Delve into the future of digital preservation and how technology is changing the way we preserve history.",
      link: "https://www.tdl.org/2023/06/the-future-of-digital-preservation-bpe-2023-plenary-talk/",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 shadow-lg rounded-lg p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 animate__animated animate__fadeIn">
                {article.title}
              </h3>
              <p className="text-gray-700 mb-4 animate__animated animate__fadeIn">
                {article.description}
              </p>
              <a
                target="_blank"
                href={article.link}
                className="text-blue-500 hover:underline animate__animated animate__fadeIn animate__delay-1s"
              >
                Read more
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
