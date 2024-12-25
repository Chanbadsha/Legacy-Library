import Lottie from "lottie-react";
import addLottie from "../assets/lottie/addPage.json";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";

const EditArtifactsModal = () => {
  const { modalArtifact, setIsButtonDisabled, isButtonDisabled } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const primaryData = Object.fromEntries(formData.entries());
    console.log(primaryData);

    // Add to Mongodb

    axios
      .put(
        `http://localhost:5000/update-artifact/${modalArtifact._id}`,
        primaryData
      )
      .then((result) => {
        toast.success("Successfully Updated");
        setIsButtonDisabled(true);
      })
      .catch((error) => {
        toast.error("Update failed. Try again");
        setIsButtonDisabled(false);
      });

    // fetch("http://localhost:5000//update-artifact", {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(primaryData),
    // })
    //   .then((result) => {
    //     toast.success("Successfully Added");
    //     setIsButtonDisabled(true);
    //   })
    //   .catch((error) => console.log(error));
  };
  const {
    artifactName,
    artifactImage,
    artifactType,
    historicalContext,
    createdAt,
    discoveredAt,
    discoveredBy,
    presentLocation,
  } = modalArtifact || {};

  return (
    <div>
      {/* Put this part before </body> tag */}
      <div className="modal w-full" role="dialog" id="my_modal_8">
        <div className="modal-box max-w-2xl">
          <div className=" bg-gray-100 w-full">
            <header className="bg-blue-600 text-white py-6 text-center">
              <h1 className="text-3xl font-bold">Edit Your Artifact</h1>
              <p className="mt-2">
                Fill out the form below to edit your artifact
              </p>
            </header>

            <div className="max-w-7xl mx-auto">
              <div className="hero-content flex flex-col lg:flex-row items-center gap-10 p-6">
                {/* Right Content */}
                <div className="container w-full mx-auto ">
                  <div className="bg-white p-8 shadow-md rounded-lg">
                    <form onSubmit={handleSubmit}>
                      {/* Artifact Name */}
                      <div className="mb-2">
                        <label
                          htmlFor="name"
                          className="block  font-semibold text-gray-700"
                        >
                          Artifact Name
                        </label>
                        <input
                          type="text"
                          name="artifactName"
                          defaultValue={artifactName}
                          className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                          placeholder="Enter artifact name"
                          required
                        />
                      </div>

                      <div className="flex gap-2">
                        {/* Artifact Type */}
                        <div className="mb-2 w-full">
                          <label
                            htmlFor="type"
                            className="block  font-semibold text-gray-700"
                          >
                            Artifact Type
                          </label>
                          <select
                            id="type"
                            name="artifactType"
                            defaultValue={artifactType}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                            required
                          >
                            <option value="">Select Artifact Type</option>
                            <option value="Tool">Tool</option>
                            <option value="Weapon">Weapon</option>
                            <option value="Document">Document</option>
                            <option value="Writing">Writing</option>
                          </select>
                        </div>

                        {/* Image Link */}
                        <div className="mb-2 w-full">
                          <label
                            htmlFor="artifactImage"
                            className="block  font-semibold text-gray-700"
                          >
                            Artifacts Image
                          </label>
                          <input
                            type="text"
                            name="artifactImage"
                            defaultValue={artifactImage}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                            placeholder="Enter the image url"
                            pattern="https?://.+"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 ">
                        {/* createdAt */}
                        <div className="mb-2 w-full">
                          <label
                            htmlFor="createdAt"
                            className="block  font-semibold text-gray-700"
                          >
                            Created Time
                          </label>
                          <input
                            type="text"
                            id="created time"
                            name="createdAt"
                            defaultValue={createdAt}
                            required
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                            placeholder="Enter created time (e.g. 100 BC, 200 BC)"
                          />
                        </div>
                        {/* discovered Time */}
                        <div className="mb-2 w-full">
                          <label
                            htmlFor="discoveredAt"
                            className="block  font-semibold text-gray-700"
                          >
                            Discovered Time
                          </label>
                          <input
                            required
                            type="number"
                            id="discoveredAt"
                            name="discoveredAt"
                            defaultValue={discoveredAt}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                            placeholder="Enter the time of discovered"
                          />
                        </div>
                      </div>

                      <div className="flex gap-2 ">
                        {/* discoveredBy */}
                        <div className="mb-2 w-full">
                          <label
                            htmlFor="discoveredBy"
                            className="block  font-semibold text-gray-700"
                          >
                            Discovered Name
                          </label>
                          <input
                            type="text"
                            required
                            id="discoveredBy"
                            name="discoveredBy"
                            defaultValue={discoveredBy}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                            placeholder="Enter the discovered name"
                          />
                        </div>

                        {/* presentLocation */}
                        <div className="mb-2 w-full">
                          <label
                            htmlFor="presentLocation"
                            className="block  font-semibold text-gray-700"
                          >
                            Present Location
                          </label>
                          <input
                            type="text"
                            id="presentLocation"
                            name="presentLocation"
                            defaultValue={presentLocation}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                            placeholder="Enter the present location"
                            required
                          />
                        </div>
                      </div>

                      {/* Historical Context */}
                      <div className="mb-2">
                        <label
                          htmlFor="description"
                          className="block  font-semibold text-gray-700"
                        >
                          Historical Context
                        </label>
                        <textarea
                          id="description"
                          name="historicalContext"
                          defaultValue={historicalContext}
                          className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                          placeholder="Enter a brief description"
                          rows="4"
                          required
                        />
                      </div>

                      <div className="flex justify-end gap-2 mt-4">
                        <div className="modal-action">
                          <button
                            type="submit"
                            disabled={isButtonDisabled}
                            className={`py-2 px-4 rounded-md ${
                              isButtonDisabled
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-blue-600 text-white"
                            }`}
                          >
                            Save Artifact
                          </button>
                          <a href="#" className="btn">
                            Close
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditArtifactsModal;
