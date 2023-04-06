import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { removeAt } from "../../lib/helpers";
import Input from "./Input";

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
      <Input username={username} setUsername={setUsername} />
    </form>
  );
}

export default SearchForm;
