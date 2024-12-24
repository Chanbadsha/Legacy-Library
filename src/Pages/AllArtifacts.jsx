import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ArtifactCard from "../Components/ArtifactCard";
import useAuth from "../Hooks/useAuth";
import Loader from "../SharedComponents/Loader";

const AllArtifacts = () => {
  const [artifactsData, setArtifactsData] = useState([]);
  const data = useLoaderData();

  const { loading, setLoading } = useAuth();

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((artifactData, index) => (
          <ArtifactCard key={index} artifactData={artifactData}></ArtifactCard>
        ))}
      </div>
    </div>
  );
};

export default AllArtifacts;
