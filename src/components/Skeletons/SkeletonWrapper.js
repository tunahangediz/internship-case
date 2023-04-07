import React from "react";
import SkeletonText from "./SkeletonText";
import SkeletonRepo from "./SkeletonRepo";
import Base from "./Base";
import "./SkeletonWrapper.css"; // Import the CSS file

function SkeletonWrapper() {
  return (
    <div className="skeleton-wrapper">
      {" "}
      {/* Add the class name */}
      <Base className="base">
        {" "}
        {/* Add the class name */}
        <div className="avatar-container">
          {" "}
          {/* Add the class name */}
          <div className="animate-skeleton rounded-full mx-auto mb-6"></div>{" "}
          {/* Remove width and height */}
          <div className="text-container">
            <SkeletonText className="skeleton-text" />{" "}
            {/* Add the class name */}
            <SkeletonText className="skeleton-text skeleton-text-small" />{" "}
            {/* Add the class name */}
          </div>
        </div>
      </Base>
      <div className="text-center">
        <SkeletonText className="skeleton-text" /> {/* Add the class name */}
      </div>
      <Base className="base mb-[0.938rem]">
        <SkeletonRepo />
      </Base>
      <Base className="base mb-[0.938rem]">
        <SkeletonRepo />
      </Base>
    </div>
  );
}

export default SkeletonWrapper;
