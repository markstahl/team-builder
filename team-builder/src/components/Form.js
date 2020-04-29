import React, { useState, useEffect } from "react";

export default function Form(props) {
  const [team, setTeam] = useState({ 
    name: "", 
    email: "", 
    role: "" 
  });

  const handleChange = (evt) => {
    setTeam({ ...team, [evt.target.name]: 
      evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (props.memberToEdit.name) {
      props.editMember(team);
    } else {
      props.addTeamMember(team);
    }
    props.addTeamFn(team);
    setTeam({ 
      name: "", 
      email: "", 
      role: "" 
    });
  };

  useEffect(() => {
    setTeam(props.memberToEdit);
  }, [props.memberToEdit]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder=" Name"
        value={team.name}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="email">Email: </label>
      <input
        id="email"
        name="email"
        type="text"
        placeholder=" Email"
        value={team.email}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="role">Role: </label>
      <select id="role" name="role" value={team.role} onChange={handleChange}>
        <option> Please Select</option>
        <option value="Full Stack Web Developer">
          Full Stack Web Developer
        </option>
        <option value="UX Designer">UX Designer</option>
        <option value="Data Scientist">Data Scientist</option>
        <option value="Mad Scientist">Mad Scientist</option>
        <option value="Pirate">Pirate</option>
        <option value="IT Specialist">IT Specialist</option>
      </select>
      <br />

      <button type="submit">Add Ya Boi</button>
    </form>
  );
}
