/* *************** Import Item *************** */
import Header from "../../Shared/Header/Header";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../../Shared/NavBar/NavBar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

/* *************** This is Home Page. *************** */
const Home = () => {
  const news = useLoaderData();
  console.log(news);

  return (
    <div className="">
      <Header></Header>
      <BreakingNews></BreakingNews>
      <NavBar></NavBar>
      <div className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-6 ">
        {/* Left Side NavBar */}
        <div className="md:mt-5 ">
          <LeftSideNav></LeftSideNav>
        </div>
        {/* Main Home Page. */}
        <div className="overflow-auto max-h-screen md:col-span-2">
          <div className="flex overflow-hidden flex-col gap-6 ">
            {news.map((a_news) => (
              <NewsCard key={a_news._id} news={a_news}></NewsCard>
            ))}
          </div>
        </div>
        {/* Right Side NavBar */}
        <div className="md:mt-4">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
