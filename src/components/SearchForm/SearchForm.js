import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { removeAt } from "../../lib/helpers";

function SearchForm() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // if in front of username has @ remove @ from username
    const usernameWithoutAt = removeAt(username);
    // navigate to user page
    navigate(`/user/${usernameWithoutAt}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Type username"
        className="rounded-[0.25rem] px-[1.125rem] py-3  w-[20rem] border  border-hipo-gray16 bg-hipo-gray4 placeholder-hipo-dark-gray text-white focus:outline-none focus:ring-1 focus:ring-hipo-gray16"
      />
    </form>
  );
}

export default SearchForm;
