import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import Loader from "../SharedComponents/Loader";
import FeaturedCard from "./FeaturedCard";
import { Link } from "react-router-dom";

const FeaturedArtifacts = () => {
  const { loading, setLoading } = useAuth();
  const [artifactsData, setArtifactsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:50000/artifactsData`);
        if (!response.ok) {
          throw new Error("Failed to fetch artifacts data.");
        }
        const data = await response.json();
        setArtifactsData(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setArtifactsData([]);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [setLoading]);

  if (loading) {
    return <Loader />;
  }

  const sortedArtifacts = artifactsData.sort(
    (a, b) => b.likeCount - a.likeCount
  );

  return (
    <div
      style={{
        backgroundColor: "#8EC5FC",
        backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
      }}
    >
      <div className="hero bg-white bg-opacity-90 rounded-lg shadow-lg">
        <div className="hero-content text-center p-10">
          <div className="max-w-6xl">
            <h1 className="text-6xl font-extrabold text-gray-800 drop-shadow-lg">
              Hall of Popularity
            </h1>
            <p className="py-6 text-xl text-gray-700">
              Welcome to the Hall of Popularity, where the artifacts that have
              captured the hearts of our users shine brightest! Explore this
              curated selection of the most liked items, each with its own
              fascinating story. Join the community in celebrating these
              historical treasures and find out what makes them stand out.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {error ? (
          <div className="text-center text-red-500 font-bold p-6">
            Error: {error}
          </div>
        ) : artifactsData.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {sortedArtifacts.slice(0, 6).map((artifactData) => (
                <FeaturedCard
                  key={artifactData._id || artifactData.artifactName}
                  artifactData={artifactData}
                />
              ))}
            </div>
            <div className="text-center items-center justify-center pb-6 pt-4">
              <Link to="/all-artifacts" className="w-44 btn btn-secondary">
                View All
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-600 font-bold p-6">
            No artifacts available.
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedArtifacts;
