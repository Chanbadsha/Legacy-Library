import React from "react";
import { Link } from "react-router-dom";
import { Hammer, Search, MapPin } from "lucide-react"; // Import icons

const ArtifactCard = ({ artifactData }) => {
  const {
    artifactName,
    artifactImage,
    artifactType,
    likeCount,
    historicalContext,
    createdAt,
    discoveredAt,
    presentLocation,
    _id,
  } = artifactData || {};

  return (
    <div className="flex flex-col animate__animated animate__zoomIn w-full mx-auto my-6 shadow-lg rounded-lg overflow-hidden bg-white">
      <div className="relative">
        <img
          src={artifactImage}
          alt={artifactName}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold py-1 px-3 rounded-md shadow">
          {artifactType || "Unknown"}
        </div>
      </div>
      <div className="flex-1 flex flex-col p-6 space-y-3">
        <h2 className="text-xl font-bold text-blue-900 truncate">
          {artifactName || "Unknown Artifact"}
        </h2>
        <p className="text-sm flex items-center gap-2">
          <Hammer className="w-5 h-5 text-gray-600" />
          {createdAt || "N/A"}
        </p>
        <p className="text-sm flex items-center gap-2">
          <Search className="w-5 h-5 text-gray-600" />
          {discoveredAt || "N/A"}
        </p>
        <p className="text-sm flex items-center gap-2">
          <MapPin className="w-5 h-5 text-gray-600" />
          {presentLocation ? presentLocation.slice(0, 20) : "N/A"}
        </p>
        <p className="text-sm text-gray-700 truncate">
          {historicalContext ? historicalContext.slice(0, 100) + "..." : "No historical context available."}
        </p>
        {/* Like Count */}
        <div className="text-sm font-semibold text-blue-600 mt-2">
          Likes: {likeCount || 0}
        </div>
      </div>
      <div className="px-6 py-3 border-t border-blue-200 bg-gray-50">
        <Link to={`/artifactsDetail/${_id}`} className="block">
          <button className="w-full btn btn-outline py-2 rounded transition duration-300 hover:bg-blue-600 hover:text-white">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArtifactCard;
