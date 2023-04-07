import React from "react";
import SkeletonText from "./SkeletonText";

function SkeletonRepo() {
  return (
    <div className="max-w-[305px] grid gap-[7px]">
      <SkeletonText className="w-[126px] h-[17px]" />
      <SkeletonText />
    </div>
  );
}

export default SkeletonRepo;
