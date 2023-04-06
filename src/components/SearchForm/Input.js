import React from "react";

function Input({ username, setUsername }) {
  return (
    <input
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      type="text"
      placeholder="Type username"
      className="rounded-[0.25rem] px-[1.125rem] py-3  w-[20rem] border  border-hipo-gray16 bg-hipo-gray4 placeholder-hipo-dark-gray text-white focus:outline-none focus:ring-1 focus:ring-hipo-gray16"
    />
  );
}

export default Input;
