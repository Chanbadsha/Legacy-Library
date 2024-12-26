import React from "react";

const LatestArticles = () => {
  const articles = [
    {
      title: "The Evolution of Artifacts in History",
      description:
        "Explore how artifacts have played a crucial role in understanding historical events.",
      link: "/articles/evolution-of-artifacts",
    },
    {
      title: "Modern Technology and Ancient Artifacts",
      description:
        "Learn about the fascinating intersection of modern technology and ancient discoveries.",
      link: "/articles/technology-and-artifacts",
    },
    {
      title: "The Importance of Preserving Historical Sites",
      description:
        "Why it is crucial to preserve historical landmarks and artifacts for future generations.",
      link: "/articles/preserving-historical-sites",
    },
    {
      title: "Unveiling the Secrets of Ancient Civilizations",
      description:
        "Discover the secrets behind ancient civilizations and their lasting impact on the world.",
      link: "/articles/secrets-of-ancient-civilizations",
    },
    {
      title: "Exploring the Role of Museums in Education",
      description:
        "Learn about the pivotal role museums play in educating the public about history and culture.",
      link: "/articles/museums-and-education",
    },
    {
      title: "The Future of Digital Preservation of Artifacts",
      description:
        "Delve into the future of digital preservation and how technology is changing the way we preserve history.",
      link: "/articles/digital-preservation-of-artifacts",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-gray-100 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{article.title}</h3>
              <p className="text-gray-700 mb-4">{article.description}</p>
              <a className="text-blue-500 hover:underline">Read more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
