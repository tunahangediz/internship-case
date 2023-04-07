import React from "react";
import UserDetails from "./UserDetails/UserDetails";
import UserStats from "./UserStats/UserStats";

function Profile({ user }) {
  return (
    <div className="relative w-full bg-[#0A0A0A] border border-[#292929] rounded-[0.25rem]">
      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
        <UserDetails user={user} />
      </div>

      {/* It's not display on small screens */}
      <a
        className="absolute top-0 right-0 px-5 py-4 text-[0.875rem] sm:flex hidden hover:text-hipo-light-green"
        href={`https://github.com/${user.login}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on Github{" "}
        <img
          src="/images/link-1.svg"
          alt="link-chain icon"
          className="h-[19.2px] w-6  ml-[0.375rem]"
        />
      </a>

      <div className="mt-[177px]">
        <UserStats user={user} />
      </div>
    </div>
  );
}

export default Profile;
