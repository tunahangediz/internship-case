import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import { octokit } from "../ocktokit/Ockokit";

function useFetchUserRepos(user_name, perPage = 2) {
  const [repos, setRepos] = useState(null);
  const [repoLoading, setRepoLoading] = useState(false);
  const [repoError, setRepoError] = useState(null);
  const [isCancelled, setIsCancelled] = useState(false);

  // fetch repos with octokit
  const fetchRepos = async () => {
    try {
      setRepoLoading(true);
      const response = await octokit.request("GET /users/{username}/repos", {
        username: user_name,
        sort: "updated",
        direction: "desc",
        per_page: perPage,
      });
      // if component unmounts before fetch completes
      // don't set state
      if (!isCancelled) setRepos(response.data);
    } catch (error) {
      if (!isCancelled) setRepoError(error);
    }
    setRepoLoading(false);
  };

  useEffect(() => {
    fetchRepos();
    // cancel fetch if component unmounts
    return () => setIsCancelled(true);
  }, []);

  return { repos, repoLoading, repoError, fetchRepos };
}

export default useFetchUserRepos;
