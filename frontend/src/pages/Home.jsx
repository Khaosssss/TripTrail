import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Services from "../components/Services";
import AllTours from "../components/AllTours";
import Experience from "../components/Experience";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <Services />
      <AllTours />
      <Experience />
    </div>
  );
};

export default Home;
