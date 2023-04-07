import React from "react";

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <span className="text-2xl">{value}</span>
      <h3 className="text-hipo-dark-gray text-[0.875rem]">{label}</h3>
    </div>
  );
}

export default Stat;
