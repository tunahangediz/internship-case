import classNames from "classnames";
import React from "react";

function Base({ children, className }) {
  return (
    <div
      className={classNames(
        "w-full bg-hipo-gray4 border border-hipo-gray16  rounded-md",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Base;
