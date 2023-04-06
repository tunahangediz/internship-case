import React from "react";

function UserProfilePage() {
  const { username } = useParams();
  return <div className="w-full flex justify-center">{username}</div>;
}

export default UserProfilePage;
