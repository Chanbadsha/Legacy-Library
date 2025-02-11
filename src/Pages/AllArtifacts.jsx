import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ArtifactCard from "../Components/ArtifactCard";
import useAuth from "../Hooks/useAuth";
import Loader from "../SharedComponents/Loader";
import { Helmet } from "react-helmet";

const AllArtifacts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState("discoveredAt"); // Default sorting by discoveredAt
  const [sortOrder, setSortOrder] = useState("asc"); // Default sorting order is ascending
  const data = useLoaderData();
  const { loading, setLoading } = useAuth();
  const [filteredArtifacts, setFilteredArtifacts] = useState(data);

  // Helper function to convert "100 BC" to -100, and handle simple years
  const convertToNumber = (dateString) => {
    if (dateString.includes("BC")) {
      return -parseInt(dateString.replace(" BC", ""));
    }
    return parseInt(dateString);
  };

  useEffect(() => {
    let filtered = data;

    // Search functionality
    if (searchQuery !== "") {
      filtered = filtered.filter((artifact) =>
        artifact.artifactName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sorting functionality
    filtered = filtered.sort((a, b) => {
      const timeA = convertToNumber(a[sortField]);
      const timeB = convertToNumber(b[sortField]);

      if (sortOrder === "asc") {
        return timeA - timeB;
      } else {
        return timeB - timeA;
      }
    });

    setFilteredArtifacts(filtered);
  }, [searchQuery, data, sortField, sortOrder]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Helmet>
        <title>LegacyLibrary - All Artifacts</title>
      </Helmet>
      {/* Header Section */}
      <header className="py-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold animate__animated animate__backInLeft mb-2 sm:text-5xl">
          All Artifacts
        </h1>
        <p className="text-lg animate__animated animate__backInRight sm:text-xl">
          Discover a wide range of historical and modern artifacts from across
          the world. Explore, learn, and collect.
        </p>
      </header>

      {/* Search and Sorting Options */}
      <div className="mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 animate__animated animate__backInLeft">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by Artifact Name"
          className="px-6 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-1/2 md:w-1/3 transition-all"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Sorting Options */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full sm:w-auto">
          <select
            className="px-6 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto transition-all"
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
          >
            <option value="discoveredAt">Discovered At</option>
            <option value="createdAt">Created At</option>
          </select>

          <select
            className="px-6 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto transition-all"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      {/* Artifacts Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
        {filteredArtifacts.length > 0 ? (
          filteredArtifacts.map((artifactData, index) => (
            <ArtifactCard key={index} artifactData={artifactData} />
          ))
        ) : (
          <p className="text-center text-lg text-gray-500 mb-4 lg:mt-4">
            No artifacts found
          </p>
        )}
      </div>
    </div>
  );
};

export default AllArtifacts;
