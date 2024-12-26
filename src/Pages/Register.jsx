import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import registerLottie from "../assets/lottie/register.json";
import Lottie from "lottie-react";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../SharedComponents/Loader";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import "animate.css";
const Register = () => {
  const { user, setUser, createUser, loading, setLoading, handleGoogleSign } =
    useAuth();

  if (loading) {
    return <Loader></Loader>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    if (user) {
      setLoading(false);
      return toast.error("You have already logged in");
    }
    const formData = new FormData(e.target);
    const userInfo = Object.fromEntries(formData.entries());

    // Check for at least one uppercase letter
    const hasUppercase = (password) => /[A-Z]/.test(userInfo.password);

    // Check for at least one lowercase letter
    const hasLowercase = (password) => /[a-z]/.test(userInfo.password);

    // Check for minimum length
    const hasMinimumLength = (password, length = 6) =>
      userInfo.password.length >= length;

    // Combined password validation function

    if (!hasUppercase(userInfo.password)) {
      setLoading(false);
      return toast.error("Password must have at least one uppercase letter.");
    }

    if (!hasLowercase(userInfo.password)) {
      setLoading(false);
      return toast.error("Password must have at least one lowercase letter.");
    }

    if (!hasMinimumLength(userInfo.password)) {
      setLoading(false);
      return toast.error("Password must be at least 6 characters long.");
    }

    // Register on Firebase
    createUser(userInfo.email, userInfo.password)
      .then((result) => {
        notify("Registration successful! Welcome!");
        setUser(result.user);
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message.slice(17));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const navigate = useNavigate();

  const location = useLocation();

  const handleGoogle = () => {
    if (user) {
      setLoading(false);
      return toast.error("You have already logged in");
    }
    handleGoogleSign()
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        notify("Registration successful! Welcome!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setUser(null);
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
      className="min-h-[calc(100vh-80px)]  flex items-center justify-center"
    >
      <div className="hero-content flex flex-col lg:flex-row items-center gap-2 p-6">
        {/* Info Section */}
        <div className="w-[80%]  animate__animated animate__backInLeft  lg:w-1/2 text-white space-y-6 relative p-8 rounded-lg">
          <div className="relative z-10">
            <Lottie animationData={registerLottie}></Lottie>
          </div>
        </div>

        {/* Sign Up Form */}
        <div className="card animate__animated animate__backInRight w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
            Create an Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label text-gray-700">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

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
            </div>
            <div className="form-control">
              <label className="label text-gray-700">
                <span className="label-text">PhotoUrl</span>
              </label>
              <input
                name="photoURL"
                type="text"
                placeholder="Enter your photoUrl"
                className="input input-bordered w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 transition">
                Sign Up
              </button>
            </div>
          </form>

          <div className="divider my-6">Or Sign Up With</div>

          {/* Social Login Buttons */}
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={handleGoogle}
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
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
