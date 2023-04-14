import React from "react";
import ProfileSkeleton from "../Skeletons/ProfileSkeleton";
import "./ErrorPage.css";
import { Link, useNavigate } from "react-router-dom";
function Error() {
  const navigate = useNavigate();
  //   setTimeout(() => {
  //     navigate("/");
  //   }, 5000);
  return (
    <div className="h-full">
      <ProfileSkeleton noAnimate={true} />
      <Link className="error-link" to="/">
        <div className="error-container text-white">
          <p className="error-p">
            Couldn't load the user profile. Please try again.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Error;
