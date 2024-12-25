import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import Loader from "../SharedComponents/Loader";

const LikedArtifacts = () => {
  const { user, loading, setLoading } = useAuth();

  if (loading) {
    return <Loader></Loader>;
  }
  const [MyArtifact, setMyArtifact] = useState([]);
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/artifactsDetail/${id}`);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/liked-artifacts?email=${user.email}`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        setMyArtifact(data);
        setLoading(false); // Stop loading after data is fetched
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [user?.email]);

  const handleAddArtifact = () => {
    navigate("/all-artifacts");
  };

  return (
    <div className="bg-gray-50 pb-8  ">
      <header
        className="text-center  py-16"
        style={{
          backgroundImage: "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
        }}
      >
        <h1 className="text-4xl font-extrabold text-white leading-tight mb-4">
          My Liked Artifacts
        </h1>
        <p className="lg:text-xl px-2 text-white mt-4 max-w-3xl mx-auto">
          Explore the artifacts you've liked. You can view or dislike your own
          liked artifact, and see the collection of historical treasures.
        </p>
      </header>

      <main className="max-w-7xl p-4 mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {MyArtifact.length === 0 ? (
          <div className="text-center py-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              No artifacts found.
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              You haven't liked any artifacts yet. Start by Liked Artifacts!
            </p>
            <button
              onClick={handleAddArtifact}
              className="mt-4 bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              See Artifact
            </button>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200 grid lg:grid-cols-2 gap-4">
            {MyArtifact.map((artifact, index) => (
              <li
                key={index}
                className="py-6 px-3  flex gap-4 md:gap-0 justify-between flex-col md:flex-row items-start hover:bg-gray-100"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
                  borderRadius: "1rem",
                }}
              >
                {/* Artifact Image */}
                <div className="w-full md:w-1/4 h-48 mr-6">
                  <img
                    src={artifact.artifactImage}
                    alt={artifact.artifactName}
                    className="w-full h-full rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="md:w-3/4 flex-1 flex flex-col  gap-3">
                  {/* Artifact Details */}
                  <div className="">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {artifact.artifactName}
                    </h2>
                    <p className="text-gray-600 mt-2">
                      {artifact.historicalContext.slice(0, 70)}....
                    </p>
                  </div>

                  {/* Artifact Actions */}
                  <div className="flex flex-col justify-between  space-y-4">
                    <div className="flex space-x-4">
                      <button
                        onClick={() => handleView(artifact._id)}
                        className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 transform hover:scale-105"
                      >
                        View
                      </button>
                    </div>
                    {/* Like Count */}
                    <div className="flex items-center space-x-2 text-gray-700">
                      <span className="text-2xl">
                        <CiStar />
                      </span>
                      <span className="text-sm font-medium">
                        {artifact.likeCount} Likes
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default LikedArtifacts;
