import React from "react";
import SkeletonText from "./SkeletonText";
import SkeletonRepo from "./SkeletonRepo";
import Base from "./Base";
import "./Skeleton.css";

function ProfileSkeleton() {
  return (
    <div className="skeleton-wrapper">
      <Base className="base-profile">
        <div className="avatar-container">
          <div className="animate-skeleton avatar mx-auto mb-6"></div>
          <div className="text-container">
            <SkeletonText className="skeleton-text" />
            <SkeletonText className="skeleton-text skeleton-text-small" />
          </div>
        </div>
      </Base>
      <div className="text-center">
        <SkeletonText className="skeleton-text" />
      </div>
      <Base className="base-repo">
        <SkeletonRepo />
      </Base>
      <Base className="base-repo">
        <SkeletonRepo />
      </Base>
    </div>
  );
}

export default ProfileSkeleton;
