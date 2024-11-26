import { useContext, useState } from "react";
import NavBar from "../../../Shared/NavBar/NavBar";
import { AuthContext } from "../../../components/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert";
import { GoEye, GoEyeClosed } from "react-icons/go";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");

  /* *************** password state  *************** */
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const navigate = useNavigate();
  const handleRegister = (event) => {
    setRegisterError("");
    event.preventDefault();
    // console.log(event.currentTarget);
    const form = new FormData(event.currentTarget);
    // const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");
    const accepted = event.target.terms.checked;

    /* *************** password check *************** */
    if (password.length < 6) {
      setRegisterError(" password should be at least  6 characters or longer");
      Swal(
        "Oops!",
        "password should be at least  6 characters or longer..!",
        "error"
      );
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at last one upper case letter."
      );
      Swal(
        "Oops!",
        "Your password should have at last one upper case letter..!",
        "error"
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError(
        "Your password should have at last one lower case letter."
      );
      Swal(
        "Oops!",
        "Your password should have at last one lower case letter..!",
        "error"
      );
      return;
    } else if (!/[0-9]/.test(password)) {
      Swal(
        "Oops!",
        "Your password should have at last one number(0-9).!",
        "error"
      );
      return;
    } else if (!accepted) {
      setRegisterError("You must accept your terms and condition!");
      Swal("Oops!", "You must accept your terms and condition..!", "error");
      return;
    }

    if (password !== confirmPassword) {
      /* *************** confirm password *************** */
      setRegisterError("Passwords do not match.");
      Swal("Oops!", "Passwords do not match.!", "error");
      return;
      /* *************** accepted terms and condition *************** */
    }

    /* *************** create User *************** */
    createUser(email, password)
      .then((result) => {
        Swal("User Register...!", "successfully", "success");
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="bg-[#f3f3f3] w-full ">
      <nav className=" ">
        <NavBar></NavBar>
      </nav>
      <section className=" flex justify-center h-screen items-center   ">
        <div className=" bg-white mx-auto w-2/5 px-16 py-10 rounded-md">
          <h3 className=" text-2xl  mb-6 text-center font-semibold">
            Register your account
          </h3>
          <hr />
          <form className="flex mt-6 flex-col gap-3" onSubmit={handleRegister}>
            <div>
              <label className=" font-semibold " htmlFor="">
                Your Name
              </label>
              <input
                name="name"
                placeholder="Enter Your Name"
                type="text"
                className="bg-[#F3F3F3] w-full py-2 mt-2 rounded-sm px-3"
              />
            </div>

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
                name="password"
                required
                placeholder="Please Enter Your Password"
                type={showPassword ? "text" : "password"}
                className="bg-[#F3F3F3] w-full py-2 mt-2 rounded-sm px-3"
              />
              <p
                onClick={() => setShowPassword(!showPassword)}
                className=" text-2xl absolute right-2 top-10 z-10 text-gray-900 cursor-pointer "
              >
                {showPassword ? <GoEyeClosed /> : <GoEye />}
              </p>
            </div>
            <div className="relative">
              <label className=" font-semibold " htmlFor="">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                required
                placeholder="Please Enter Your Email"
                type={showPassword2 ? "text" : "password"}
                className="bg-[#F3F3F3] w-full py-2 mt-2 rounded-sm px-3"
              />
              <p
                onClick={() => setShowPassword2(!showPassword2)}
                className=" text-2xl absolute right-2 top-10 z-10 text-gray-900 cursor-pointer "
              >
                {showPassword2 ? <GoEyeClosed /> : <GoEye />}
              </p>
            </div>
            <div className="flex gap-2 items-center ">
              <input
                name="terms"
                placeholder="Please Enter Your Email"
                type="checkbox"
                className=" w-4 h-4  py-2 mt-2 rounded-sm px-3 "
              />
              <p className="pt-2">Accept Term & Conditions</p>
            </div>
            <input
              type="submit"
              className="bg-slate-700  hover:bg-green-800 duration-500 hover:border  text-white w-full py-2 font-bold rounded-sm px-3"
            />
          </form>
          {/* *********** error and success message ************ */}

          {registerError && (
            <p className="text-red-600 text-center mt-4"> {registerError} </p>
          )}

          {/* *********** Already have an account...! Go to login page ************ */}

          <p className="text-center font-semibold mt-8">
            Already Have An Account ?
            <span className="text-orange-600">
              <Link to={"/login"}> Login</Link>
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Register;
