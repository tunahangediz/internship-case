import classNames from "classnames";
import React from "react";

function SkeletonText({ className }) {
  return (
    <div className={classNames("w-full h-4 animate-skeleton", className)}></div>
  );
}

export default SkeletonText;
