import React, { useState } from "react";

function Forms() {
  let [value, setValue] = useState({
    firstName: "",
    lastName: "",
  });
  let handleSubmit = (e) => {
    e.preventDefault();
        setValue({
      firstName: "",
      lastName: "",
    });
    console.log(value)
  };
  let handleInputs = (e) => {
    setValue((cuurentVal) => {
      return { ...cuurentVal, [e.target.name]: e.target.value };
    });
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="firstName">Enter First Name : </label>
        <input
          type="text"
          id="firstName"
          value={value.firstName}
          onChange={handleInputs}
          name="firstName"
        />
        <br />
        <br />
        <br />
        <label htmlFor="lastName">Enter Last Name : </label>
        <input
          type="text"
          id="lastName"
          value={value.lastName}
          onChange={handleInputs}
          name="lastName"
        />
        <br />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Forms;
