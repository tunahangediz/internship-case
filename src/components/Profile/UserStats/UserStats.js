import React from "react";
import Stat from "./Stat";
import { convertToK } from "../../../lib/helpers";
import "./UserStats.css";

function UserStats({ user }) {
  const { public_repos, followers, following } = user;
  // convert followers and following to K or M if needed
  const followersK = convertToK(followers);
  const followingK = convertToK(following);

  return (
    <div className="stats">
      <Stat value={public_repos} label="Repositories" />
      <Stat value={followingK} label="Following" />
      <Stat value={followersK} label="Followers" />
    </div>
  );
}

export default UserStats;
