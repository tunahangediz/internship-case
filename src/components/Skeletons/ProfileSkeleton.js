import React from "react";
import SkeletonText from "./SkeletonText";
import SkeletonRepo from "./SkeletonRepo";
import Base from "./Base";
import "./Skeleton.css";
import classNames from "classnames";

function ProfileSkeleton({ noAnimate }) {
  return (
    <div className={"skeleton-wrapper"}>
      <Base className="base-profile">
        <div className="avatar-container">
          <div
            // {no animate when noAnimate is true}
            className={classNames(
              { "no-animate": noAnimate },
              "animate-skeleton avatar mx-auto mb-6"
            )}
          ></div>
          <div className="text-container">
            <SkeletonText noAnimate={noAnimate} className="skeleton-text" />
            <SkeletonText
              noAnimate={noAnimate}
              className="skeleton-text skeleton-text-small"
            />
          </div>
        </div>
      </Base>
      <div className="text-center">
        <SkeletonText noAnimate={noAnimate} className="skeleton-text" />
      </div>
      <Base className="base-repo">
        <SkeletonRepo noAnimate={noAnimate} />
      </Base>
      <Base className="base-repo">
        <SkeletonRepo noAnimate={noAnimate} />
      </Base>
    </div>
  );
}

export default ProfileSkeleton;
