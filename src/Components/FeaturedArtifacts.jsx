import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import Loader from "../SharedComponents/Loader";
import FeaturedCard from "./FeaturedCard";

const FeaturedArtifacts = () => {
  const { user, loading, setLoading } = useAuth();
  if (loading) {
    return <Loader />;
  }
  const [artifactsData, setArtifactsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../artifacts.json");
        const data = await response.json();

        setArtifactsData(data);
      } catch (error) {
        console.log(error);
        setArtifactsData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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

      <div className="grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {artifactsData.map((artifactData) => (
          <FeaturedCard key={artifactData.id} artifactData={artifactData} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedArtifacts;
