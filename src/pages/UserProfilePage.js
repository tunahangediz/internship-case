import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchUser from "../hooks/useFetchUser";
import Profile from "../components/Profile/Profile";
import useFetchUserRepos from "../hooks/useFetchUserRepos";
import Repositories from "../components/Repositories/Repositories";
import SkeletonText from "../components/Skeletons/SkeletonText";
import SkeletonWrapper from "../components/Skeletons/SkeletonWrapper";

function UserProfilePage() {
  const { username } = useParams();
  // fetch user data with useFetchUser custom hook
  const { userLoading, userError, user } = useFetchUser(username);
  // get user repos
  const { repos, repoLoading, repoError } = useFetchUserRepos(username);

  // if user data is loading
  if (userLoading) {
    return (
      <div className="w-full flex justify-center">
        <SkeletonWrapper />
      </div>
    );
  }

  // if user data is not loading and there is an error
  if (!userLoading && userError) {
    return <div className="w-full flex justify-center">Error</div>;
  }

  if (user && !userLoading && !userError && !repoLoading && !repoError) {
    return (
      <div className="w-full flex justify-center">
        <div className="mt-[10.375rem] w-full flex flex-col justify-center items-center px-2 sm:px-0">
          <div className="max-w-[34.25rem] w-full">
            <Profile user={user} />
            <Repositories repos={repos} username={username} user={user} />
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfilePage;
