import React, { useContext, useState } from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import Swal from "sweetalert";
import { GoEye, GoEyeClosed } from "react-icons/go";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { logIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log("Login page Location:", location);

  const handleLogin = (event) => {
    event.preventDefault();
    // console.log(event.currentTarget);
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log("email:", email, "password:", password);
    console.log(form);

    logIn(email, password)
      .then(() => {
        // alert("Log-In successful.");
        Swal("User Login...!", "successfully", "success");
        // navigate after Login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-[#f3f3f3] w-full">
      <nav className=" ">
        <NavBar></NavBar>
      </nav>
      <section className=" flex justify-center h-screen items-center">
        <div className=" bg-white mx-auto w-2/4 px-16">
          <h3 className=" text-2xl  my-6 text-center font-semibold">
            Login your account
          </h3>
          <hr />
          <form className="flex mt-6 flex-col gap-5" onSubmit={handleLogin}>
            <div>
              <label className=" font-semibold " htmlFor="">
                Email Address
              </label>
              <input
                name="email"
                required
                placeholder="Please Enter Your Email"
                type="email"
                className="bg-[#F3F3F3] w-full py-2 mt-2 rounded-sm px-3"
              />
            </div>

            <div className="relative">
              <label className=" font-semibold " htmlFor="">
                Password
              </label>
              <input
                required
                name="password"
                placeholder="Please Enter Your Password"
                type={showPassword ? "text" : "password"}
                className="bg-[#F3F3F3] w-full py-2 mt-2 rounded-sm px-3"
              />
              <p
                onClick={() => setShowPassword(!showPassword)}
                className=" text-2xl absolute right-2 top-10 z-10  text-gray-900 cursor-pointer "
              >
                {showPassword ? <GoEyeClosed /> : <GoEye />}
              </p>
            </div>
            <input
              type="submit"
              className="bg-slate-700  hover:bg-green-800 duration-500 hover:shadow-md  text-white w-full py-3 font-bold rounded-sm px-3"
            />
          </form>
          <p className="text-center font-semibold my-8">
            Dont’t Have An Account ?
            <span className="text-orange-600">
              <Link to={"/register"}> Register</Link>
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
