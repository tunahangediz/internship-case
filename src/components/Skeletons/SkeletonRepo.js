import React from "react";
import SkeletonText from "./SkeletonText";

function SkeletonRepo({ noAnimate }) {
  return (
    <div className="skeleton-repo">
      <SkeletonText noAnimate={noAnimate} className="skeleton-text" />
      <SkeletonText noAnimate={noAnimate} className="skeleton-paragraph" />
    </div>
  );
}

export default SkeletonRepo;
