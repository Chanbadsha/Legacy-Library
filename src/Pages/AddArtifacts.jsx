import Lottie from "lottie-react";
import addLottie from "../assets/lottie/addPage.json";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const AddArtifacts = () => {
  const { user } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const primaryData = Object.fromEntries(formData.entries());

    const { name, email, ...finalData } = primaryData;

    finalData.likeCount = 0;
    finalData.artifactAdder = {
      name,
      email,
    };
    finalData.likedBy = [];

    // Add to Mongodb

    fetch("https://assginment-11-server-rho.vercel.app/addArtifacts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(finalData),
    })
      .then((result) => {
        toast.success("Successfully Added");
        e.target.reset();
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className=" bg-gray-100">
      <header className="bg-blue-600 text-white py-6 text-center">
        <h1 className="text-3xl font-bold animate__animated animate__backInRight">
          Add New Artifact
        </h1>
        <p className="mt-2 animate__animated animate__backInLeft">
          Fill out the form below to add a new artifact
        </p>
      </header>

      <div className="max-w-7xl mx-auto">
        <div className="hero-content flex flex-col lg:flex-row items-center gap-10 p-6">
          {/* Left Image */}
          <div className="w-full animate__animated animate__zoomIn lg:w-1/2 text-white space-y-6 relative p-8 rounded-lg">
            <div className="relative z-10">
              <Lottie animationData={addLottie}></Lottie>
            </div>
          </div>

          {/* Right Content */}
          <div className="container animate__animated animate__zoomIn w-full lg:w-1/2 mx-auto p-6">
            <div className="bg-white p-8 shadow-md rounded-lg">
              <form onSubmit={handleSubmit}>
                {/* Artifact Name */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block  text-lg font-semibold text-gray-700"
                  >
                    Artifact Name
                  </label>
                  <input
                    type="text"
                    name="artifactName"
                    className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                    placeholder="Enter artifact name"
                    required
                  />
                </div>

                <div className="flex gap-2">
                  {/* Artifact Type */}
                  <div className="mb-4 w-full">
                    <label
                      htmlFor="type"
                      className="block text-lg font-semibold text-gray-700"
                    >
                      Artifact Type
                    </label>
                    <select
                      id="type"
                      name="artifactType"
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
                  <div className="mb-4 w-full">
                    <label
                      htmlFor="artifactImage"
                      className="block text-lg font-semibold text-gray-700"
                    >
                      Artifacts Image
                    </label>
                    <input
                      type="text"
                      name="artifactImage"
                      className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                      placeholder="Enter the image url"
                      pattern="https?://.+"
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-2 ">
                  {/* createdAt */}
                  <div className="mb-4 w-full">
                    <label
                      htmlFor="createdAt"
                      className="block text-lg font-semibold text-gray-700"
                    >
                      Created Time
                    </label>
                    <input
                      type="text"
                      id="created time"
                      name="createdAt"
                      required
                      className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                      placeholder="Enter created time (e.g. 100 BC, 200 BC)"
                    />
                  </div>
                  {/* discovered Time */}
                  <div className="mb-4 w-full">
                    <label
                      htmlFor="discoveredAt"
                      className="block text-lg font-semibold text-gray-700"
                    >
                      Discovered Time
                    </label>
                    <input
                      required
                      type="number"
                      id="discoveredAt"
                      name="discoveredAt"
                      className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                      placeholder="Enter the time of discovered"
                    />
                  </div>
                </div>

                <div className="flex gap-2 ">
                  {/* discoveredBy */}
                  <div className="mb-4 w-full">
                    <label
                      htmlFor="discoveredBy"
                      className="block text-lg font-semibold text-gray-700"
                    >
                      Discovered Name
                    </label>
                    <input
                      type="text"
                      required
                      id="discoveredBy"
                      name="discoveredBy"
                      className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                      placeholder="Enter the discovered name"
                    />
                  </div>

                  {/* presentLocation */}
                  <div className="mb-4 w-full">
                    <label
                      htmlFor="presentLocation"
                      className="block text-lg font-semibold text-gray-700"
                    >
                      Present Location
                    </label>
                    <input
                      type="text"
                      id="presentLocation"
                      name="presentLocation"
                      className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                      placeholder="Enter the present location"
                      required
                    />
                  </div>
                </div>

                {/* Historical Context */}
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-lg font-semibold text-gray-700"
                  >
                    Historical Context
                  </label>
                  <textarea
                    id="description"
                    name="historicalContext"
                    className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                    placeholder="Enter a brief description"
                    rows="4"
                    required
                  />
                </div>

                {/* Artifacts Adder Details */}
                <fieldset className="border px-4 py-2 my-5 rounded-lg shadow-md">
                  <legend className="text-lg font-bold px-2 text-gray-700">
                    Artifacts Adder Details
                  </legend>
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Artifact adder name */}
                    <div className="mb-4 w-full">
                      <label
                        htmlFor="name"
                        className="block text-sm md:text-lg font-semibold text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={user.displayName}
                        readOnly
                        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                      />
                    </div>
                    {/* Email */}
                    <div className="mb-4 w-full">
                      <label
                        htmlFor="email"
                        className="block text-sm md:text-lg font-semibold text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        defaultValue={user.email}
                        readOnly
                        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                      />
                    </div>
                  </div>
                </fieldset>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Add Artifact
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddArtifacts;
