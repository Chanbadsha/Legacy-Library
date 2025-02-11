import { Link, NavLink } from "react-router-dom";
import logo from "../assets/legacylibrary.jpg";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const Navbar = () => {
  const { user, handleSignOut } = useAuth();

  const SignOut = async () => {
    try {
      await handleSignOut();
      toast.success("Log out successful");
    } catch (error) {
      toast.error("Failed to log out");
    }
  };

  const Links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/all-artifacts">All Artifacts</NavLink></li>
      <li><NavLink to="/addArtifacts">Add Artifacts</NavLink></li>
      <li><NavLink to="/about">About Us</NavLink></li>
      <li><NavLink to="/contact">Contact Us</NavLink></li>
      {!user && <li><NavLink to="/register">Register</NavLink></li>}
    </>
  );

  return (
    <div className="bg-base-100 fixed top-0 left-0 w-full px-4 z-40 shadow-md">
      <div className="navbar max-w-7xl mx-auto flex justify-between items-center">
        {/* Navbar Start */}
        <div className="flex items-center gap-4">
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
              {Links}
            </ul>
          </div>
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 text-xl md:text-2xl font-bold">
            <img className="w-12 h-12 hidden md:block rounded-full" src={logo} alt="Legacy Library" />
            <h1>LegacyLibrary</h1>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{Links}</ul>
        </div>

        {/* Navbar End */}
        <div className="flex items-center">
          {user ? (
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="btn bg-transparent border border-red-500 w-10 h-10 md:w-12 md:h-12 p-0 rounded-full">
                {user?.photoURL ? (
                  <img className="rounded-full w-full h-full" src={user.photoURL} alt="User" />
                ) : (
                  <FaUserCircle className="w-full h-full text-gray-500" />
                )}
              </MenuButton>
              <MenuItems className="absolute right-0 mt-2 w-40 bg-base-100 rounded-md shadow-lg z-50 p-2">
                <MenuItem>{({ active }) => <NavLink to="/my-artifacts" className={`block px-4 py-2 ${active ? "bg-gray-100" : ""}`}>My Artifacts</NavLink>}</MenuItem>
                <MenuItem>{({ active }) => <NavLink to="/liked-artifacts" className={`block px-4 py-2 ${active ? "bg-gray-100" : ""}`}>Liked Artifacts</NavLink>}</MenuItem>
                <MenuItem>{({ active }) => <button onClick={SignOut} className={`block w-full text-left px-4 py-2 ${active ? "bg-gray-100" : ""}`}>Log Out</button>}</MenuItem>
              </MenuItems>
            </Menu>
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
