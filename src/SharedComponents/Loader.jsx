import React from "react";
import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full min-h-[calc(100vh-288px)] h-full justify-center flex items-center">
      <RingLoader color="#0984e3" />
    </div>
  );
};

export default Loader;
