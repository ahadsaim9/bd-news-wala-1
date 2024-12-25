import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import BreakingNews from "../Home/BreakingNews/BreakingNews";
import Header from "../../Shared/Header/Header";

const About = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <NavBar></NavBar>
      <h1>This is About Page.</h1>
    </div>
  );
};

export default About;
