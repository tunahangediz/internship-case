import React from "react";

function UserDetails({ user }) {
  const { name, login, avatar_url } = user;
  return (
    <div className="w-full flex flex-col items-center">
      <img
        className="w-28 h-28 rounded-full"
        src={avatar_url}
        alt="User Avatar"
      />
      <div className="text-center mt-[25px]">
        <h2 className="text-[1.125rem]">{name}</h2>
        <h3 className="text-[0.875rem] font-normal">@{login}</h3>
        {/* it's only display small screens and ml-2 for optical symmetry */}
        <a
          className="ml-2 mt-2 text-[0.875rem] flex sm:hidden"
          href={`https://github.com/${login}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Github{" "}
          <img
            src="images/link.svg"
            alt="link-chain icon"
            className="h-[19.2px] w-6  ml-[0.375rem]"
          />
        </a>
      </div>
    </div>
  );
}

export default UserDetails;
