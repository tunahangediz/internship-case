import React from "react";
import "./UserDetails.css";
function UserDetails({ user }) {
  const { name, login, avatar_url } = user;
  return (
    <div className="details">
      <img className="user-avatar" src={avatar_url} alt="User Avatar" />
      <div className="user-info">
        <h2 className="h2 text-white">{name}</h2>
        <h3 className="h3 username text-white ">@{login}</h3>
        {/* it's only display small screens and ml-2 for optical symmetry */}
        {/* <a
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
        </a> */}
      </div>
    </div>
  );
}

export default UserDetails;
