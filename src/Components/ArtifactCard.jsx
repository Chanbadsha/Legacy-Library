import React from "react";
import { Link } from "react-router-dom";

const ArtifactCard = ({ artifactData }) => {
  const {
    artifactName,
    artifactImage,
    artifactType,
    historicalContext,
    createdAt,
    discoveredAt,
    presentLocation,
    _id,
  } = artifactData || {};

  return (
    <div className=" flex flex-col  w-full mx-auto my-6 shadow-xl rounded-lg overflow-hidden ">
      <div className="relative">
        <img
          src={artifactImage}
          alt={artifactName}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded">
          {artifactType}
        </div>
      </div>
      <div className="flex-1 flex flex-col p-6">
        <h2 className="text-xl font-bold text-blue-900">
          {" "}
          {artifactName ? artifactName : "N/A"}
        </h2>
        <p className="text-sm mt-3">
          <span className="font-semibold">Created At:</span>{" "}
          {createdAt ? createdAt : "N/A"}
        </p>
        <p className="text-sm mt-2">
          <span className="font-semibold">Discovered At: </span>
          {discoveredAt ? discoveredAt : "N/A"}
        </p>

        <p className="text-sm flex-1 flex gap-1  mt-2">
          <span className="font-semibold">Location:</span>{" "}
          {presentLocation ? presentLocation : "N/A"}
        </p>
        <p className="text-sm text-gray-700 mt-4">
          {" "}
          {historicalContext ? historicalContext : "N/A"}
        </p>
      </div>
      <div className=" px-6 py-3 fle  border-t border-blue-200">
        <Link to={`/artifactsDetail/${_id}`}>
          {" "}
          <button className="w-full btn btn-outline py-2   rounded transition duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArtifactCard;
