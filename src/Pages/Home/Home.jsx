/* *************** Import Item *************** */
import Header from "../../Shared/Header/Header";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../../Shared/NavBar/NavBar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import moment from "moment";
import BreakingNews from "./BreakingNews/BreakingNews";
import userLogo1 from "../../assets/user.png";
import editorsInsight1 from "../../assets/editorsInsight1.png";
import editorsInsight2 from "../../assets/editorsInsight2.png";
import editorsInsight3 from "../../assets/editorsInsight3.png";
import { CiShare2 } from "react-icons/ci";
import { BsBookmark } from "react-icons/bs";
import { FaEye, FaStar } from "react-icons/fa";

/* *************** This is Home Page. *************** */
const Home = () => {
  return (
    <div className="">
      <Header></Header>
      <BreakingNews></BreakingNews>
      <NavBar></NavBar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Side NavBar */}
        <div className="md:mt-12 ">
          <LeftSideNav></LeftSideNav>
        </div>
        {/* Main Home Page. */}
        <div className="md:col-span-2 ">
          <h3 className="text-2xl font-semibold">Dragon News Home</h3>
          {/* Section >>>>>>1 */}
          <section className="w-full h-auto my-4 flex flex-col gap-6 ">
            {/* section >>>> 1 >box=1 */}
            <div className="flex items-center bg-[#F3F3F3] px-5 rounded-md justify-between ">
              <section className="p-3 pl-2 flex gap-3 ">
                <img className="rounded-full w-14" src={userLogo1} alt="" />
                <div>
                  <h2 className="font-semibold"> Awlad Hossain</h2>
                  <p>{moment().format("YYYY-MM-DD ")}</p>
                </div>
              </section>
              <section className=" text-2xl flex gap-4">
                <BsBookmark />
                <CiShare2 />
              </section>
            </div>
            {/* section >>>> 1 >box=2 */}
            <div className="flex flex-col gap-6 px-4">
              <h2 className="text-2xl font-bold ">
                Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
                Military Aid Package Yet
              </h2>
              <img
                className="w-full h-auto rounded-md"
                src={editorsInsight1}
                alt=""
              />
              <p className=" text-[14px]  ">
                Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
                Europe, Joe Biden, Military, News, Russia, Security, UK,
                Ukraine, United States, Worthy News (Worthy News) – U.S.
                President Joe Biden has announced nearly $3 billion in new U.S.
                military a...
                <span className="text-orange-500 font-semibold ">
                  Read More
                </span>
              </p>
              <hr />
              <section className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <p className="text-orange-500 flex gap-2">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                  <span>4.6</span>
                </div>
                <div className="flex gap-3 items-center">
                  <FaEye />
                  <span>499</span>
                </div>
              </section>
            </div>
          </section>
          {/* Section >>>>>>2 */}
          <section className="w-full h-auto my-4 flex flex-col gap-6 ">
            {/* section >>>> 1 >box=1 */}
            <div className="flex items-center bg-[#F3F3F3] px-5 rounded-md justify-between ">
              <section className="p-3 pl-2 flex gap-3 ">
                <img className="rounded-full w-14" src={userLogo1} alt="" />
                <div>
                  <h2 className="font-semibold"> Awlad Hossain</h2>
                  <p>{moment().format("YYYY-MM-DD ")}</p>
                </div>
              </section>
              <section className=" text-2xl flex gap-4">
                <BsBookmark />
                <CiShare2 />
              </section>
            </div>
            {/* section >>>> 1 >box=2 */}
            <div className="flex flex-col gap-6 px-4">
              <h2 className="text-2xl font-bold ">
                Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
                Military Aid Package Yet
              </h2>
              <img
                className="w-full h-auto rounded-md"
                src={editorsInsight2}
                alt=""
              />
              <p className=" text-[14px]  ">
                Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
                Europe, Joe Biden, Military, News, Russia, Security, UK,
                Ukraine, United States, Worthy News (Worthy News) – U.S.
                President Joe Biden has announced nearly $3 billion in new U.S.
                military a...
                <span className="text-orange-500 font-semibold ">
                  Read More
                </span>
              </p>
              <hr />
              <section className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <p className="text-orange-500 flex gap-2">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                  <span>4.6</span>
                </div>
                <div className="flex gap-3 items-center">
                  <FaEye />
                  <span>499</span>
                </div>
              </section>
            </div>
          </section>
          {/* Section >>>>>>3 */}
          <section className="w-full h-auto my-4 flex flex-col gap-6 ">
            {/* section >>>> 1 >box=1 */}
            <div className="flex items-center bg-[#F3F3F3] px-5 rounded-md justify-between ">
              <section className="p-3 pl-2 flex gap-3 ">
                <img className="rounded-full w-14" src={userLogo1} alt="" />
                <div>
                  <h2 className="font-semibold"> Awlad Hossain</h2>
                  <p>{moment().format("YYYY-MM-DD ")}</p>
                </div>
              </section>
              <section className=" text-2xl flex gap-4">
                <BsBookmark />
                <CiShare2 />
              </section>
            </div>
            {/* section >>>> 1 >box=2 */}
            <div className="flex flex-col gap-6 px-4">
              <h2 className="text-2xl font-bold ">
                Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
                Military Aid Package Yet
              </h2>
              <img
                className="w-full h-auto rounded-md"
                src={editorsInsight3}
                alt=""
              />
              <p className=" text-[14px]  ">
                Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
                Europe, Joe Biden, Military, News, Russia, Security, UK,
                Ukraine, United States, Worthy News (Worthy News) – U.S.
                President Joe Biden has announced nearly $3 billion in new U.S.
                military a...
                <span className="text-orange-500 font-semibold ">
                  Read More
                </span>
              </p>
              <hr />
              <section className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <p className="text-orange-500 flex gap-2">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                  <span>4.6</span>
                </div>
                <div className="flex gap-3 items-center">
                  <FaEye />
                  <span>499</span>
                </div>
              </section>
            </div>
          </section>
        </div>
        {/* Right Side NavBar */}
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
