import classNames from "classnames";
import React from "react";

function Base({ children, className }) {
  return <div className={classNames(className, "base")}>{children}</div>;
}

export default Base;
