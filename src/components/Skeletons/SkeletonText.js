import classNames from "classnames";
import React from "react";

function SkeletonText({ className, noAnimate }) {
  return (
    <div
      className={classNames(
        { "no-animate": noAnimate },
        "animate-skeleton",
        className
      )}
    ></div>
  );
}

export default SkeletonText;
