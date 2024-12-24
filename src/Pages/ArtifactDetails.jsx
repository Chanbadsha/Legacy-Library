import axios from "axios";
import React, { useEffect, useId, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const ArtifactDetailPage = () => {
  const { user } = useAuth();
  const userId = user.email;
  const artifactData = useLoaderData();

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
    likeCount,
    _id,
    likedBy,
  } = artifactData;

  useEffect(() => {
    const likedUser = likedBy?.find((user) => user == userId);
    if (likedUser) {
      setIsLiked(true);
      return;
    }
  }, []);

  const [currentLikeCount, setCurrentLikeCount] = useState(likeCount);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLikeToggle = (id) => {
    setLoading(true);
    const updatedLikeCount = isLiked
      ? currentLikeCount - 1
      : currentLikeCount + 1;

    if (!userId) {
      console.error("User is not logged in.");
      setLoading(false);
      return;
    }
    axios
      .put(
        `http://localhost:50000/updateLike/${id}`,
        {
          userId,
          likeCount: updatedLikeCount,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setCurrentLikeCount(updatedLikeCount);

        setIsLiked(!isLiked);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          toast.error("You have already liked");
        } else {
          console.error(error);
        }
      })
      .finally(() => {
        setLoading(false);
      });
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
      <div className="px-4 flex items-center justify-center py-8">
        <div className="max-w-6xl flex-col lg:flex-row w-full bg-white shadow-xl rounded-lg overflow-hidden flex">
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
                  onClick={() => handleLikeToggle(_id)}
                  disabled={loading}
                  className={`px-5 py-2 rounded-lg font-semibold transition-transform transform ${
                    isLiked
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  } hover:scale-105`}
                >
                  {loading ? "Loading..." : isLiked ? "Dislike" : "Like"}
                </button>
                <p className="ml-4 text-lg font-bold text-gray-800">
                  {currentLikeCount} {currentLikeCount === 1 ? "Like" : "Likes"}
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
