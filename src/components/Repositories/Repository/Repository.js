import React from "react";
import { numberWithCommas, truncateString } from "../../../lib/helpers";
import "./Repository.css";

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
      className="repository"
    >
      <div className="repo-info">
        <h3 className="h3-bold ">{repo.name}</h3>
        <p className="h3-bold repo-description">{description}</p>
      </div>
      <div className="repo-stats">
        <span className="h2">{stargazersCount}</span>
        <p className="hipo-dark-gray repo-stars">Stars</p>
      </div>
    </a>
  );
}

export default Repository;
