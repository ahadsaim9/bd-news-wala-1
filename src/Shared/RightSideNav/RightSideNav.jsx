import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import backgroundImg from "../../assets/bg.png";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";
const RightSideNav = () => {
  return (
    <div>
      {/*  section---->1 */}
      <section>
        <h1 className="text-2xl font-semibold mb-3">Login With</h1>
        <div className=" my-2 items-center mx-auto border rounded-md w-full text-center py-2 font-bold shadow-md ">
          <div className=" w-full items-center justify-center flex">
            <div className="flex cursor-pointer">
              <span className="pr-1 pt-1">
                <FaGoogle></FaGoogle>
              </span>
              <p> Login With Google</p>
            </div>
          </div>
        </div>
        <div className=" my-4 border rounded-md w-full text-center py-2 font-bold shadow-md  ">
          <div className=" w-full items-center justify-center flex">
            <div className="flex cursor-pointer">
              <span className="pr-1 pt-1">
                <FaGithub></FaGithub>
              </span>
              <p className=""> Login With Github</p>
            </div>
          </div>
        </div>
      </section>
      {/*  section---->2 */}
      <section>
        <h1 className="text-2xl font-semibold my-5">Find Us On</h1>
        <div className=" my-2 items-center mx-auto border rounded-md w-full text-center py-2 font-bold shadow-md ">
          <div className=" w-full items-center pl-4 flex">
            <div className="flex cursor-pointer">
              <span className="pr-1 pt-1 text-blue-800">
                <FaFacebook></FaFacebook>
              </span>
              <p> Facebook</p>
            </div>
          </div>
        </div>
        <div className=" my-4 border rounded-md w-full text-center py-2 font-bold shadow-md  ">
          <div className=" w-full items-center pl-4 flex">
            <div className="flex cursor-pointer">
              <span className="pr-1 pt-1 text-blue-500 ">
                <FaTwitter></FaTwitter>
              </span>
              <p className="">Twitter</p>
            </div>
          </div>
        </div>
        <div className=" my-4 border rounded-md w-full text-center py-2 font-bold shadow-md  ">
          <div className=" w-full items-center pl-4  flex">
            <div className="flex cursor-pointer">
              <span className="pr-1 pt-1 text-pink-500">
                <FaInstagram></FaInstagram>
              </span>
              <p className="">Instagram</p>
            </div>
          </div>
        </div>
      </section>
      {/*  section---->3 */}
      <section className="bg-[#F3F3F3] h-auto pb-4 px-4">
        <h1 className="text-2xl font-semibold py-4">Q-Zone</h1>
        <div className="flex flex-col gap-4">
          <img src={qZone1} className="w-full h-auto" alt="" />

          <img src={qZone2} className="w-full h-auto" alt="" />
          <img src={qZone3} className="w-full h-auto" alt="" />
        </div>
      </section>
      {/*  section---->4 */}
      <div
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className=" bg-cover bg-center  w-full flex items-center flex-col justify-center gap-6 my-5  px-5 h-auto py-16 text-white "
      >
        <h3 className="text-4xl text-center">Create an Amazing Newspaper</h3>
        <p className="text-gray-200 px-4 text-center">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button
          className="bg-pink-500 font-bold px-3 py-1 mr-6
      rounded-sm text-white"
        >
          Latest
        </button>
      </div>
    </div>
  );
};

export default RightSideNav;
