import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import { octokit } from "../ocktokit/Ockokit";

function useFetchUser(user_name) {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(false);
  const [userError, setUserError] = useState(null);
  const [isCancelled, setIsCancelled] = useState(false);

  useEffect(() => {
    // fetch user with octokit
    // octokit instance is separated from this hook
    const fetchUser = async () => {
      try {
        setUserLoading(true);
        const response = await octokit.request("GET /users/{username}", {
          username: user_name,
        });
        // if component unmounts before fetch completes
        // don't set state
        if (!isCancelled) setUser(response.data);
      } catch (error) {
        if (!isCancelled) setUserError(error);
      }
      setUserLoading(false);
    };
    fetchUser();
    // cancel fetch if component unmounts
    return () => setIsCancelled(true);
  }, []);

  return { user, userLoading, userError };
}

export default useFetchUser;
