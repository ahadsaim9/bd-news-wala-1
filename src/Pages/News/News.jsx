import Header from "../../Shared/Header/Header";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import NavBar from "../../Shared/NavBar/NavBar";
import { useLoaderData, useParams } from "react-router-dom";

const News = () => {
  const { id } = useParams();
  const news = useLoaderData();
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <div className="grid grid-cols-12 gap-5">
        {/* ********** section----->1 *********** */}
        <section className="col-span-8 ">
          <p>{id}</p>
        </section>
        {/* ********** section----->2 *********** */}
        <section className="col-span-4 ">
          <RightSideNav></RightSideNav>
        </section>
      </div>
    </div>
  );
};

export default News;
