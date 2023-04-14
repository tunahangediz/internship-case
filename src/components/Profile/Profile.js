import React from "react";
import UserDetails from "./UserDetails/UserDetails";
import UserStats from "./UserStats/UserStats";
import "./Profile.css";

function Profile({ user }) {
  return (
    <div className="profile-wrapper">
      <div className="details-wrapper">
        <UserDetails user={user} />
      </div>

      {/* It's not display on small screens */}
      <a
        className="view-on-github"
        href={`https://github.com/${user.login}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on Github{" "}
        <img
          src="/images/link.svg"
          alt="link-chain icon"
          className="link-chain-icon"
        />
      </a>
      <UserStats user={user} />
    </div>
  );
}

export default Profile;
