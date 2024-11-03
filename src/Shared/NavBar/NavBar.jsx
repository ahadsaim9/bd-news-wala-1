import { Link, NavLink } from "react-router-dom";
import userLogo from "../../../src/assets/user.png";
import "./Header/NavBar.css";
const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink activeClassName="active" to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to={"/about"}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to={"/career"}>
          Career
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to={"/register"}>
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-white my-6">
      <div className="navbar-start">
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar mr-4 "
        >
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={userLogo} />
          </div>
        </div>
        <Link to={"/login"}>
          <button
            className="bg-black rounded-sm font-bold px-5 py-1 mr-6
      text-white"
          >
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
