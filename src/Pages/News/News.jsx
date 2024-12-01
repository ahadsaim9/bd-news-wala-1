import Header from "../../Shared/Header/Header";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import NavBar from "../../Shared/NavBar/NavBar";
import { useLoaderData, useParams } from "react-router-dom";

const News = () => {
  const { id } = useParams();
  const news = useLoaderData();

  // Find the specific news item
  const selectedNews = news.find((item) => item._id === id);

  const { title, author, details, thumbnail_url, published_date } =
    selectedNews;

  // Handle missing news
  if (!selectedNews) {
    return (
      <div>
        <Header />
        <NavBar />
        <div className="text-center mt-10">
          <p className="text-xl font-semibold">News not found!</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <NavBar />
      <div className="grid grid-cols-12 gap-5 px-4 py-6">
        {/* Main Content */}
        <section className="col-span-8">
          <div className="bg-white p-6 rounded-md shadow-md">
            <img
              src={thumbnail_url}
              alt={title}
              className="w-full h-auto rounded-md mb-4"
            />
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
              <p>
                By: <span className="font-semibold">{author.name}</span>
              </p>
              <p>Published on: {published_date}</p>
            </div>
            <p className="text-gray-800 leading-relaxed">{details}</p>
          </div>
        </section>
        {/* Right Side Navigation */}
        <section className="col-span-4">
          <RightSideNav />
        </section>
      </div>
    </div>
  );
};

export default News;
