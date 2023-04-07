import React, { useEffect, useState } from "react";
import { octokit } from "../ocktokit/Ockokit";

function useLoadMoreRepo() {
  const [moreRepos, setMoreRepos] = useState(null);
  const [repoLoading, setRepoLoading] = useState(false);
  const [repoError, setRepoError] = useState(null);

  const loadMore = async (userName, perPage) => {
    // fetch more repos
    // pass in the username and the number of repos to fetch
    try {
      setRepoLoading(true);
      const response = await octokit.request("GET /users/{username}/repos", {
        username: userName,
        sort: "updated",
        direction: "desc",
        per_page: perPage,
      });
      setMoreRepos(response.data);
    } catch (error) {
      setRepoError(error);
    }
    setRepoLoading(false);
    return moreRepos;
  };

  return { loadMore, moreRepos, repoLoading, repoError };
}

export default useLoadMoreRepo;
