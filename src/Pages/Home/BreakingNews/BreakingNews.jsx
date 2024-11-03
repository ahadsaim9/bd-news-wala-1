import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="bg-[#F3F3F3] p-4 text-center flex">
      <button
        className="bg-pink-500 font-bold px-3 py-1 mr-6
      rounded-sm text-white"
      >
        Latest
      </button>
      <Marquee speed={100} pauseOnHover={true} className="cursor-pointer">
        <ul className="flex gap-6">
          <li>
            I can be a React component, multiple React components, or just some
            text.
          </li>
          <li>
            I can be a React component, multiple React components, or just some
            text.
          </li>
          <li>
            I can be a React component, multiple React components, or just some
            text.
          </li>
          <li>
            I can be a React component, multiple React components, or just some
            text.
          </li>
        </ul>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
