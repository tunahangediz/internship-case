import React from "react";
import Stat from "./Stat";
import { convertToK } from "../../../lib/helpers";

function UserStats({ user }) {
  const { public_repos, followers, following } = user;
  // convert followers and following to K or M if needed
  const followersK = convertToK(followers);
  const followingK = convertToK(following);

  return (
    <div className="flex w-full justify-between mt-[3.125rem] mb-[2.813rem] px-6 sm:pl-[3.125rem] sm:pr-[3.875rem]">
      <Stat value={public_repos} label="Repositories" />
      <Stat value={followingK} label="Following" />
      <Stat value={followersK} label="Followers" />
    </div>
  );
}

export default UserStats;
