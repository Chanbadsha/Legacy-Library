import React, { useState } from "react";

const ArtifactDetailPage = () => {
  const artifactData = {
    artifactName: "Incan Gold Mask",
    artifactImage: "https://i.ibb.co.com/B4GJ8gM/Incan-Gold-Mask1.jpg",
    artifactType: "Tools",
    historicalContext:
      "This mask was used in Incan rituals and represents the artistry of the civilization. Crafted from gold, it reflects the Incan reverence for the sun god Inti, as gold was considered sacred. The intricate design showcases the skill of Incan artisans, who were adept at working with precious metals. Masks like this were often used in ceremonial practices and as burial artifacts for important individuals. They symbolize the Incan belief in the connection between the spiritual and physical worlds. The mask is a testament to the cultural and artistic achievements of the Incan Empire.",
    createdAt: "1500 AD",
    discoveredAt: "1911",
    discoveredBy: "Hiram Bingham",
    presentLocation: "Yale Peabody Museum",
    artifactAdder: {
      name: "David White",
      email: "david.white@example.com",
    },
    liked: 9,
  };

  const {
    artifactName,
    artifactImage,
    artifactType,
    historicalContext,
    createdAt,
    discoveredAt,
    discoveredBy,
    presentLocation,
    artifactAdder,
    liked,
  } = artifactData;

  const [likeCount, setLikeCount] = useState(liked);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <div>
      {/* Header Section */}
      <div className="w-full bg-gray-100 py-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Explore the {artifactName} in Detail
          </h1>
          <p className="mt-2 md:text-xl text-gray-600">
            Discover the fascinating history and significance of this
            <span className="font-semibold"> {artifactName.toLowerCase()}</span>
            . Uncover its origins, purpose, and unique features that define its
            place in history. Learn how this artifact has shaped the world
            around us and continues to influence its field.
          </p>
        </div>
      </div>
      {/* Content Section */}
      <div className=" px-4 flex items-center justify-center py-8">
        <div className=" max-w-6xl flex-col lg:flex-row w-full bg-white shadow-xl rounded-lg overflow-hidden flex">
          {/* Left Image Section */}
          <div className="lg:w-1/2">
            <img
              src={artifactImage}
              alt={artifactName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Detail Section */}
          <div className="lg:w-1/2 px-3 py-8 space-y-2 lg:space-y-4">
            <h1 className="text-2xl lg:text-4xl font-extrabold text-gray-800 ">
              {artifactName}
            </h1>
            <p className="text-md text-gray-600 ">
              <span className="font-semibold text-gray-600">Type:</span>{" "}
              {artifactType}
            </p>
            <p className="text-md text-gray-600 ">
              <span className="font-semibold text-gray-600">Created At:</span>{" "}
              {createdAt}
            </p>
            <p className="text-md text-gray-600 ">
              <span className="font-semibold text-gray-600">
                Discovered At:
              </span>{" "}
              {discoveredAt || "N/A"}
            </p>
            <p className="text-md text-gray-600 ">
              <span className="font-semibold text-gray-600">
                Discovered By:
              </span>{" "}
              {discoveredBy || "N/A"}
            </p>
            <p className="text-md text-gray-600 ">
              <span className="font-semibold text-gray-600">Location:</span>{" "}
              {presentLocation}
            </p>
            <p className="text-gray-700 mt-6 text-justify">
              {historicalContext}
            </p>

            <div className="mt-8 flex gap-3 flex-col">
              {/* Added By */}
              <div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-600">Added By:</span>{" "}
                  {artifactAdder?.name} ({artifactAdder?.email})
                </p>
              </div>

              {/* Like Button */}
              <div className="flex items-center">
                <button
                  onClick={handleLikeToggle}
                  className={`px-5 py-2 rounded-lg font-semibold transition-transform transform ${
                    isLiked
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  } hover:scale-105`}
                >
                  {isLiked ? "Dislike" : "Like"}
                </button>
                <p className="ml-4 text-lg font-bold text-gray-800">
                  {likeCount} {likeCount === 1 ? "Like" : "Likes"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetailPage;
