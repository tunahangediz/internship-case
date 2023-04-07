import React from "react";
import { numberWithCommas, truncateString } from "../../lib/helpers";

function Repository({ repo }) {
  // if more than 33 characters truncate it and add ...
  const description = repo.description ? truncateString(repo.description) : "";
  // if number greater than 1000 use comma separator
  const stargazersCount = numberWithCommas(repo.stargazers_count);

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="flex justify-between items-center bg-hipo-gray4 border
        border-hipo-gray16 rounded-[0.25rem] p-[25px] hover:bg-white
        hover:border-hipo-gray16 hover:text-hipo-gray4"
    >
      <div className="text-[0.875rem]">
        <h3>{repo.name}</h3>
        <p className=" text-hipo-dark-gray">{description}</p>
      </div>
      <div className="text-right">
        <span className="text-[1.125rem]">{stargazersCount}</span>
        <p className="text-xs text-hipo-dark-gray ml-2">Stars</p>
      </div>
    </a>
  );
}

export default Repository;
