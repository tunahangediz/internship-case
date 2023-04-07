import React from "react";
import Repository from "./Repository";
import useLoadMoreRepo from "../../hooks/useLoadMoreRepo";
import LoadMore from "./LoadMore";
function Repositories({ repos, username, user }) {
  // useLoadMoreRepo hook to fetch more repos from github api
  const { loadMore, moreRepos, repoLoading } = useLoadMoreRepo(username);
  // if moreRepos length is greater than  repos length then set repos to moreRepos
  if (moreRepos && moreRepos.length > repos.length) {
    repos = moreRepos;
  }

  const handleLoadMoreRepositories = async (e) => {
    e.preventDefault();
    // increase the length of repos by 2 and fetch more repos from github
    const more = await loadMore(username, repos.length + 2);
  };

  return (
    <>
      <h2 className="text-[1.125rem] text-center mt-[30px] mb-[15px]">
        Repositories
      </h2>
      <div className="grid gap-[0.938rem] w-full">
        {repos.map((repo) => (
          <Repository key={repo.id} repo={repo} />
        ))}
      </div>
      <LoadMore
        repos={repos}
        handleLoadMoreRepositories={handleLoadMoreRepositories}
        repoLoading={repoLoading}
        user={user}
      />
      {/* if repos length is 0 then show no repositories */}
      {repos.length === 0 && (
        <h2 className="text-[1.125rem] text-center">No Repositories</h2>
      )}
    </>
  );
}

export default Repositories;
