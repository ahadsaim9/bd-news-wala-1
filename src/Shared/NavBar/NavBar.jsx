import { Link, NavLink } from "react-router-dom";
import userLogo from "../../../src/assets/user.png";
import "./Header/NavBar.css";
import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import Swal from "sweetalert";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        // alert("Log-Out successful.");
        Swal("Log-Out...!", "successfully", "success");
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-orange-500 " : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-orange-500 " : ""
          }
          to={"/about"}
        >
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-orange-500 " : ""
          }
          to={"/register"}
        >
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="navbar  h-20">
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
      <div className="navbar-center flex">
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
        {user ? (
          <button
            onClick={handleSignOut}
            className="bg-black rounded-sm font-bold px-5 py-1 mr-6
      text-white"
          >
            SignOut
          </button>
        ) : (
          <Link to={"/login"}>
            <button
              className="bg-black rounded-sm font-bold px-5 py-1 mr-6
      text-white"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
