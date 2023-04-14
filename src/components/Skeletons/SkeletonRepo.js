import React from "react";
import SkeletonText from "./SkeletonText";

function SkeletonRepo() {
  return (
    <div className="skeleton-repo">
      <SkeletonText className="skeleton-text" />
      <SkeletonText className="skeleton-paragraph" />
    </div>
  );
}

export default SkeletonRepo;
