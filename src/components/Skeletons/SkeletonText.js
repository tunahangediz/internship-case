import classNames from "classnames";
import React from "react";

function SkeletonText({ className }) {
  return <div className={classNames("animate-skeleton", className)}></div>;
}

export default SkeletonText;
