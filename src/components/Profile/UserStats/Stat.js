import React from "react";

function Stat({ value, label }) {
  return (
    <div className="stat">
      <span className="value text-white">{value}</span>
      <h3 className="h3 label">{label}</h3>
    </div>
  );
}

export default Stat;
