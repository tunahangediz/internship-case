import React from "react";

function LoadMore({ repos, handleLoadMoreRepositories, repoLoading, user }) {
  const isAllReposLoaded = repos.length == user.public_repos;

  if (repos.length > 0 && !isAllReposLoaded) {
    return (
      <button
        onClick={handleLoadMoreRepositories}
        className="bg-hipo-green w-full rounded-[0.25rem] border border-hipo-light-green p-[13px] my-6 hover:bg-hipo-light-green hover:text-black hover:border-hipo-green"
      >
        {repoLoading ? "Loading..." : "Load More"}
      </button>
    );
  }

  if (isAllReposLoaded) {
    return (
      <h2 className="text-[1.125rem] text-center my-2">No More Repositories</h2>
    );
  }
}

export default LoadMore;
