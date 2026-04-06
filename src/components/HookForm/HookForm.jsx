import React from "react";
import useInputField from "../../hooks/useInputField";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [password, PasswordOnChange] = useInputField("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", name, email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          onChange={nameOnChange}
          placeholder="Name"
        />
        <br />
        <br />
        <input
          value={email}
          onChange={emailOnChange}
          type="email"
          placeholder="Email"
        />
        <br />
        <br />
        <input
          type="password"
          onChange={PasswordOnChange}
          placeholder="Password"
        />{" "}
        <br /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
