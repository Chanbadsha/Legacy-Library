import React from "react";
import { Link } from "react-router-dom";

const FeaturedCard = ({ artifactData }) => {
  const { artifactName, artifactImage, historicalContext, liked } =
    artifactData || {};
  const id = "sample";
  return (
    <div className="card bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative">
        <img
          src={artifactImage}
          alt={artifactName}
          className="w-full h-56 object-cover"
        />
      </div>
      <div className="card-body p-4">
        <h2 className="card-title text-2xl font-bold text-gray-800 flex justify-between items-center">
          {artifactName}
          <div className="badge badge-secondary">{liked}</div>
        </h2>
        <p className="text-gray-600 mt-2">{historicalContext}</p>
        <div className=" mt-4">
          <Link
            to={`/artifactsDetail/${id}`}
            className="w-full btn btn-outline btn-success"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
