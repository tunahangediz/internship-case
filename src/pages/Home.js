import React from "react";
import SearchForm from "../components/SearchForm/SearchForm";

function Home() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col justify-center items-center gap-10">
        <div>
          <img src="images/hipo-logo.svg" alt="hipolabs logo" />
        </div>
        <h1 className="text-white text-[1.375rem] font-normal">
          Github Profile Explorer
        </h1>
        <SearchForm />
      </div>
    </div>
  );
}

export default Home;
