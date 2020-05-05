import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");

  const onChange = (e) => {
    setUsername(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (username === "") {
      alert("Please enter a username");
    } else {
      window.location.href = `/${username}`;
    }
  };

  return (
    <div className="regForm">
      <form onSubmit={onSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="username"
          value={username}
          onChange={onChange}
          placeholder="Enter username"
        />
        <input type="submit" value="Join Chat" />
      </form>
    </div>
  );
};

export default Register;
