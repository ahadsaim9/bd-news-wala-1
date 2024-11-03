import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="w-full mx-auto h-svh py-28   bg-[#F3F3F3]">
      <div className="mx-auto w-2/4 px-16 p-8 rounded-md bg-white ">
        <h3 className=" text-2xl  my-6 text-center font-semibold">
          Login your account
        </h3>
        <hr />
        <section className="flex mt-6 flex-col gap-5">
          <div>
            <label className=" font-semibold " htmlFor="">
              Email Address
            </label>
            <input
              required
              placeholder="Please Enter Your Email"
              type="email"
              className="bg-[#F3F3F3] w-full py-3 mt-2 rounded-sm px-3"
            />
          </div>

          <div>
            <label className=" font-semibold " htmlFor="">
              Password
            </label>
            <input
              required
              placeholder="Please Enter Your Password"
              type="password"
              className="bg-[#F3F3F3] w-full py-3 mt-2 rounded-sm px-3"
            />
          </div>
          <input
            type="submit"
            className="bg-slate-700 hover:text-black hover:bg-[#f3f3f3] duration-500 hover:border border-black text-white w-full py-3 font-bold rounded-sm px-3"
          />
        </section>
        <p className="text-center font-semibold my-8">
          Dont’t Have An Account ?
          <span className="text-orange-600">
            <Link to={"/register"}>Register</Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;
