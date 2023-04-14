import React from "react";

function Input({ username, setUsername }) {
  return (
    <input
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      type="text"
      placeholder="Type username"
      className="form-input"
    />
  );
}

export default Input;
