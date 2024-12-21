import { Link, NavLink } from "react-router-dom";
import logo from "../assets/legacylibrary.jpg";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();

  const Links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      {/* <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">Home</NavLink>
      </li> */}
    </>
  );

  return (
    <div className=" bg-base-100">
      <div className="navbar max-w-7xl mx-auto">
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
          <div className="btn btn-ghost text-2xl py-2 ">
            <img className="max-w-20  rounded-full h-full" src={logo} alt="" />
            <h1>LegacyLibrary</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div>
              <button>Log Out</button>
            </div>
          ) : (
            <button>
              <Link to={"/login"}>Log In</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
