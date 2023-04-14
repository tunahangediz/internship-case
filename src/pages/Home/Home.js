import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import "./Home.css";

function Home() {
  return (
    <div className="flex-all-center w-full h-full">
      <div className="homepage-header">
        <div>
          <img src="images/hipo-logo.svg" alt="hipolabs logo" />
        </div>
        <h1 className="h1 text-white">Github Profile Explorer</h1>
        <SearchForm />
      </div>
    </div>
  );
}

export default Home;
