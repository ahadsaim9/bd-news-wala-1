import { BsBookmark } from "react-icons/bs";
import { CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, author, title, thumbnail_url, total_view, details } = news;
  const { img, name, published_date } = author;
  return (
    <div className="w-full h-auto my-4 flex flex-col gap-6 bg-slate-50">
      {/* section >>>> 1 >box=1 */}
      <div className="flex items-center bg-[#F3F3F3] px-5 rounded-md justify-between">
        <section className="p-3 pl-2 flex gap-3 ">
          <img className="rounded-full w-14" src={img} alt="" />
          <div>
            <h2 className="font-semibold"> {name}</h2>
            {/* <p>{moment().format("YYYY-MM-DD ")}</p> */}
            <p>{published_date}</p>
          </div>
        </section>
        <section className=" text-2xl flex gap-4">
          <BsBookmark />
          <CiShare2 />
        </section>
      </div>
      {/* section >>>> 1 >box=2 */}
      <div className="flex flex-col gap-6 px-4">
        <h2 className="text-2xl font-bold ">{title}</h2>
        <img className="w-full h-auto rounded-md" src={thumbnail_url} alt="" />
        {details.length > 200 ? (
          <p className=" text-[14px]  ">
            {details.slice(0, 200)}
            <Link to={`/news/${_id}`}>
              <span className="text-orange-500 font-semibold ">Read More</span>
            </Link>
          </p>
        ) : (
          <p className=" text-[14px] "> {details} </p>
        )}
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
            <span>{total_view}</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsCard;
