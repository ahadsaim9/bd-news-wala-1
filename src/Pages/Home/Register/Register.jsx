import React from "react";

const Register = () => {
  return (
    <section className="w-full mx-auto  pt-10  bg-[#F3F3F3]">
      <div className="mx-auto w-2/5 px-5 lg:px-14 p-8 rounded-md bg-white ">
        <h3 className=" text-2xl  mb-6 text-center font-semibold">
          Register your account
        </h3>
        <hr />
        <section className="flex mt-6 flex-col gap-5">
          <div>
            <label className=" font-semibold " htmlFor="">
              Your Name
            </label>
            <input
              placeholder="Enter Your Name"
              type="text"
              className="bg-[#F3F3F3] w-full py-3 mt-2 rounded-sm px-3"
            />
          </div>

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
          <div>
            <label className=" font-semibold " htmlFor="">
              Confirm Password
            </label>
            <input
              required
              placeholder="Please Enter Your Email"
              type="password"
              className="bg-[#F3F3F3] w-full py-3 mt-2 rounded-sm px-3"
            />
          </div>
          <div className="flex gap-2 items-center ">
            <input
              required
              placeholder="Please Enter Your Email"
              type="checkbox"
              className=" w-4 h-4  py-3 mt-2 rounded-sm px-3"
            />
            <p className="pt-2">Accept Term & Conditions</p>
          </div>
          <input
            type="submit"
            className="bg-slate-700 hover:text-black hover:bg-[#f3f3f3] duration-500 hover:border border-black text-white w-full py-3 font-bold rounded-sm px-3"
          />
        </section>
      </div>
    </section>
  );
};

export default Register;
