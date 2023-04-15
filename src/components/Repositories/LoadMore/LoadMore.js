import React from "react";
import "./LoadMore.css";

function LoadMore({ repos, handleLoadMoreRepositories, repoLoading, user }) {
  const isAllReposLoaded = repos.length == user.public_repos;

  if (repos.length > 0 && !isAllReposLoaded) {
    return (
      <button
        onClick={handleLoadMoreRepositories}
        className="loadmore-btn h3-bold text-white"
      >
        {repoLoading ? "Loading..." : "Load More"}
      </button>
    );
  }

  if (isAllReposLoaded) {
    return <h2 className="h2 text-center text-white">No More Repositories</h2>;
  }
}

export default LoadMore;
