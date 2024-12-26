import { Link, NavLink } from "react-router-dom";
import logo from "../assets/legacylibrary.jpg";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, handleSignOut } = useAuth();

  const SignOut = () => {
    handleSignOut().then((result) => {
      toast.success("Log out successful");
    });
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle the dropdown state
  };

  const Links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-artifacts">All Artifacts</NavLink>
      </li>
      <li>
        <NavLink to="/addArtifacts">Add Artifacts</NavLink>
      </li>
      {!user && (
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className=" bg-base-100 fixed top-0 left-0 w-full px-2 z-40">
      <div className="navbar max-w-7xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>

          {/* Logo Section */}
          <Link to={"/"} className="btn btn-ghost text-xl md:text-2xl py-2 ">
            <img
              className="max-w-20 hidden md:block  rounded-full h-full"
              src={logo}
              alt=""
            />
            <h1>LegacyLibrary</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{Links}</ul>
        </div>

        <div className="navbar-end flex ">
          {user ? (
            <div className="navbar-start  max-w-12  z-50">
              <div className="dropdown ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn bg-transparent  rounded-full max-w-12  "
                  onClick={toggleDropdown}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      toggleDropdown();
                    }
                  }}
                >
                  <div
                    data-tip={user.displayName}
                    className="tooltip tooltip-left"
                  >
                    {user.photoURL && user.photoURL.length > 2 ? (
                      <img
                        className="rounded-full max-w-8 md:max-w-12"
                        src={user.photoURL}
                        alt={user.displayName || "User"}
                      />
                    ) : (
                      // Fallback content (e.g., a default avatar or nothing)
                      <div className="rounded-full max-w-12 bg-gray-300 flex items-center justify-center">
                        <p className="text-xl md:text-2xl">
                          {" "}
                          <FaUserCircle />
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                {isDropdownOpen && (
                  <ul
                    tabIndex={0}
                    className="menu gap-2 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-1 md:w-32 -ml-12  lg:-ml-8 absolute p-2 shadow"
                  >
                    <li>
                      <NavLink to="/my-artifacts">My Artifacts</NavLink>
                    </li>
                    <li>
                      <NavLink to="/liked-artifacts">Liked Artifacts</NavLink>
                    </li>
                    <li>
                      <button onClick={SignOut}>Log Out</button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline">Log in</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
