import { Link } from "react-router-dom";
import moment from "moment";
import photo_1 from "../../assets/1.png";
import photo_2 from "../../assets/2.png";
import photo_3 from "../../assets/3.png";

import { CiCalendarDate } from "react-icons/ci";
const LeftSideNav = () => {
  return (
    <div>
      {/* section----->1 */}
      <section>
        <h1 className="text-2xl font-semibold py-3 text-center bg-[#F3F3F3] rounded-md">
          National News
        </h1>
        <div className="flex flex-col gap-4 pr-2 pl-10 py-5 text-[#9F9F9F]">
          <Link to={"/"}>
            <p>Breaking News</p>
          </Link>
          <Link to={"/"}>
            <p>Regular News</p>
          </Link>
          <Link to={"/"}>
            <p>International News</p>
          </Link>
          <Link to={"/"}>
            <p>Sports</p>
          </Link>
          <Link to={"/"}>
            <p>Entertainment</p>
          </Link>
          <Link to={"/"}>
            <p>Culture</p>
          </Link>
          <Link to={"/"}>
            <p>Arts</p>
          </Link>
          <Link to={"/"}>
            <p>All News</p>
          </Link>
        </div>
      </section>
      {/* section------->2 */}
      <section>
        <div>
          <div className="my-4">
            <img src={photo_1} alt="" />
          </div>
          <h2 className=" text-2xl ">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className="flex gap-4 my-4 pt-2">
            <p>Sports</p>
            <p className="flex gap-1">
              <span className="pt-1">
                <CiCalendarDate />
              </span>
              {moment().format("MMMM D, YYYY")}
            </p>
          </div>
        </div>
        <div>
          <div className="my-4">
            <img src={photo_2} alt="" />
          </div>
          <h2 className=" text-2xl ">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className="flex gap-4 my-4 pt-2">
            <p>Sports</p>
            <p className="flex gap-1">
              <span className="pt-1">
                <CiCalendarDate />
              </span>
              {moment().format("MMMM D, YYYY")}
            </p>
          </div>
        </div>
        <div>
          <div className="my-4">
            <img src={photo_3} alt="" />
          </div>
          <h2 className=" text-2xl ">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className="flex gap-4 my-4 pt-2">
            <p>Sports</p>
            <p className="flex gap-1">
              <span className="pt-1">
                <CiCalendarDate />
              </span>
              {moment().format("MMMM D, YYYY")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeftSideNav;
