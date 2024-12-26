import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ArtifactCard from "../Components/ArtifactCard";
import useAuth from "../Hooks/useAuth";
import Loader from "../SharedComponents/Loader";

const AllArtifacts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const data = useLoaderData();
  const { loading, setLoading } = useAuth();
  const [filteredArtifacts, setFilteredArtifacts] = useState(data);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredArtifacts(data);
    } else {
      const filtered = data.filter((artifact) =>
        artifact.artifactName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredArtifacts(filtered);
    }
  }, [searchQuery, data]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="py-8  bg-blue-600 text-white text-center">
        <h1 className="text-4xl font-bold animate__animated animate__backInLeft">
          All Artifacts
        </h1>
        <p className="mt-2 text-lg animate__animated animate__backInRight">
          Discover a wide range of historical and modern artifacts from across
          the world. Explore, learn, and collect.
        </p>
      </header>

      {/* Search Input */}
      <div className="mt-8 animate__animated animate__backInLeft flex justify-center">
        <input
          type="text"
          placeholder="Search by Artifact Name"
          className="px-4 py-2 border border-gray-300 rounded-lg w-1/2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Artifacts Grid */}
      <div className="grid  gap-4 grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
        {filteredArtifacts.length > 0 ? (
          filteredArtifacts.map((artifactData, index) => (
            <ArtifactCard key={index} artifactData={artifactData} />
          ))
        ) : (
          <p className="text-center  text-lg text-gray-500 mb-4 lg:mt-4">
            No artifacts found
          </p>
        )}
      </div>
    </div>
  );
};

export default AllArtifacts;
