import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../SharedComponents/Loader";
import useAuth from "../Hooks/useAuth";
import Lottie from "lottie-react";
import loginLottie from "../assets/lottie/login.json";
import { Helmet } from "react-helmet";

const Login = () => {
  const { user, setUser, loading, setLoading, handleGoogleSign, loginUser } =
    useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  if (loading) {
    return <Loader></Loader>;
  }

  const handleForm = (e) => {
    e.preventDefault();

    if (user) {
      setLoading(false);
      return toast.error("You have already logged in");
    }
    const formData = new FormData(e.target);
    const userInfo = Object.fromEntries(formData.entries());

    // Firebase Login

    loginUser(userInfo.email, userInfo.password)
      .then((result) => {
        notify("Login successful! Welcome!");
        setUser(result.user);

        navigate("/");
      })
      .catch((error) => {
        toast.error(
          "Login unsuccessful. Make sure your information is correct"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogle = () => {
    if (user) {
      setLoading(false);
      return toast.error("You have already logged in");
    }

    handleGoogleSign()
      .then((res) => {
        setUser(res.user);

        notify("Login successful! Welcome!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  const notify = (message) => {
    toast.success(message, {
      duration: 3000,
      icon: "👏",
      style: {
        background: "linear-gradient(135deg, #28a745, #34d058)",
        color: "#fff",
        padding: "12px",
        borderRadius: "8px",
        fontSize: "16px",
        zIndex: "10",
      },
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#D9AFD9",
        backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
      }}
      className="min-h-[calc(100vh-80px)] bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center"
    >
      <Helmet>
        <title>LegacyLibrary - Login</title>
      </Helmet>
      <div className="hero-content flex flex-col lg:flex-row items-center gap-1 p-6">
        {/* Info Section */}
        <div className="w-[80%] animate__animated animate__backInRight lg:w-1/2 text-white space-y-6 relative p-8 rounded-lg">
          <div className="relative z-10">
            <Lottie animationData={loginLottie}></Lottie>
          </div>
        </div>

        {/* Login Form */}
        <div className="card animate__animated animate__backInLeft w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
            Login to Your Account
          </h2>

          <form onSubmit={handleForm} className="space-y-4">
            <div className="form-control">
              <label className="label text-gray-700">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="form-control">
              <label className="label text-gray-700">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <label className="label">
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 transition">
                Login
              </button>
            </div>
          </form>

          <div className="divider my-6">Or Login With</div>

          {/* Social Login Buttons */}
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={handleGoogle}
              href="#"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 text-blue-600 transition"
            >
              <FaGoogle size={24} />
            </button>
            <a
              href="#"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 text-blue-400 transition"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 text-blue-800 transition"
            >
              <FaFacebook size={24} />
            </a>
          </div>

          <p className="text-center mt-6 text-sm">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default Login;
