import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchUser from "../../hooks/useFetchUser";
import Profile from "../../components/Profile/Profile";
import Repositories from "../../components/Repositories/Repositories";
import useFetchUserRepos from "../../hooks/useFetchUserRepos";
import "./UserProfilePage.css";
import ProfileSkeleton from "../../components/Skeletons/ProfileSkeleton";

function UserProfilePage() {
  const { username } = useParams();
  // fetch user data with useFetchUser custom hook
  const { userLoading, userError, user } = useFetchUser(username);
  // get user repos
  const { repos, repoLoading, repoError } = useFetchUserRepos(username);

  // if user data is loading
  if (userLoading) {
    return <ProfileSkeleton />;
  }

  // if user data is not loading and there is an error
  if (!userLoading && userError) {
    return <div className="w-full flex justify-center">Error</div>;
  }

  if (user && !userLoading && !userError && !repoLoading && !repoError) {
    return (
      <div className="w-full">
        <div className="profile-page">
          <Profile user={user} />
          <Repositories repos={repos} username={username} user={user} />
        </div>
      </div>
    );
  }
}

export default UserProfilePage;
