import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import EditArtifactsModal from "../Modal/EditArtifactsModal";

import Swal from "sweetalert2";
import Loader from "../SharedComponents/Loader";

const MyArtifacts = () => {
  const { user, loading, setModalArtifact, setIsButtonDisabled } = useAuth();

  if (loading) {
    return <Loader></Loader>;
  }
  const [MyArtifact, setMyArtifact] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(
          `https://assginment-11-server-rho.vercel.app/delete-artifact/${id}`
        );
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        navigate("/all-artifacts");
      }
    });
  };
  const handleView = (id) => {
    navigate(`/artifactsDetail/${id}`);
  };
  useEffect(() => {
    const fetchArtifacts = async () => {
      try {
        const response = await axios.get(
          `https://assginment-11-server-rho.vercel.app/my-artifacts?email=${user?.email}`,
          {
            withCredentials: true,
          }
        );
        // console.log(response);
        setMyArtifact(response.data);
      } catch (error) {
        console.error("Failed to fetch artifacts:", error.message);
      }
    };

    if (user?.email) {
      fetchArtifacts();
    }
  }, [user?.email, handleDelete]);

  const handleEdit = (artifact) => {
    setIsButtonDisabled(false);
    setModalArtifact(artifact);
  };

  const handleAddArtifact = () => {
    navigate("/addArtifacts");
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
          My Artifacts
        </h1>
        <p className="lg:text-xl px-2 text-white mt-4 max-w-3xl mx-auto">
          Explore the artifacts you've added. You can update or remove your own
          creations, and manage your collection of historical treasures.
        </p>

        <EditArtifactsModal></EditArtifactsModal>
      </header>

      <main className="max-w-7xl p-4 mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
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
                      <a
                        href="#my_modal_8"
                        onClick={() => handleEdit(artifact)}
                        className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
                      >
                        Update
                      </a>
                      <button
                        onClick={() => handleDelete(artifact._id)}
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
