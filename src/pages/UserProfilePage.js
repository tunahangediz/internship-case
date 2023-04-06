import React from "react";
import { useParams } from "react-router-dom";
import useFetchUser from "../hooks/useFetchUser";

function UserProfilePage() {
  const { username } = useParams();
  // fetch user data with useFetchUser custom hook
  const { userLoading, userError, user } = useFetchUser(username);

  // if user data is loading
  if (userLoading) {
    return <div className="w-full flex justify-center">Loading...</div>;
  }

  // if user data is not loading and there is an error
  if (!userLoading && userError) {
    return <div className="w-full flex justify-center">Error</div>;
  }

  return <div className="w-full flex justify-center">{username}</div>;
}

export default UserProfilePage;
