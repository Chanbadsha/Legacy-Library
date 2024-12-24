import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const MyArtifacts = () => {
  const { user } = useAuth();
  const [MyArtifact, setMyArtifact] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:50000/my-artifacts?email=${user.email}`, {
        withCredentials: true,
      })
      .then(({ data }) => setMyArtifact(data))
      .catch((error) => console.log(error));
  }, [user.email]);

  const handleEdit = (id) => {
    console.log(`Edit artifact with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete artifact with ID: ${id}`);
  };

  const handleAddArtifact = () => {
    navigate("/addArtifacts");
  };

  return (
    <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <header
        className="text-center mb-16 py-16"
        style={{
          backgroundImage: "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
        }}
      >
        <h1 className="text-4xl font-extrabold text-white leading-tight mb-4">
          My Artifacts
        </h1>
        <p className="text-xl text-white mt-4 max-w-3xl mx-auto">
          Explore the artifacts you've added. You can update or remove your own
          creations, and manage your collection of historical treasures.
        </p>
      </header>

      <main className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {MyArtifact.length === 0 ? (
          <div className="text-center py-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              No artifacts found.
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              You haven't added any artifacts yet. Start by adding your own!
            </p>
            <button
              onClick={handleAddArtifact}
              className="mt-4 bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Add Artifact
            </button>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200 grid md:grid-cols-2 gap-4">
            {MyArtifact.map((artifact, index) => (
              <li
                key={index}
                className="py-6 px-8 flex justify-between items-start hover:bg-gray-100"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
                  borderRadius: "1rem",
                }}
              >
                {/* Artifact Image */}
                <div className="w-1/4 h-48 mr-6">
                  <img
                    src={artifact.artifactImage}
                    alt={artifact.artifactName}
                    className="w-full h-full rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="w-3/4 flex">
                  {/* Artifact Details */}
                  <div className="w-3/4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {artifact.artifactName}
                    </h2>
                    <p className="text-gray-600 mt-2">
                      {artifact.historicalContext.slice(0, 70)}....
                    </p>
                  </div>

                  {/* Artifact Actions */}
                  <div className="flex flex-col justify-between items-center space-y-4">
                    <div className="flex space-x-4">
                      <button
                        onClick={() => handleEdit(artifact.id)}
                        className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(artifact.id)}
                        className="bg-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-105"
                      >
                        Delete
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

export default MyArtifacts;
