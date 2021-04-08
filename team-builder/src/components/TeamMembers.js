import React from "react";

import {Link} from "react-router-dom";

const TeamMembers = (props) => {
    const {person} = props;
return(
    <div className="card">
        <h1>Person</h1>
        <div>Name: {person.name}</div>
        <div>Email: {person.email}</div>
        <div>Role: {person.role}</div>
        <Link to={`/edit/${person.id}`}>Edit</Link>
    </div>
)
};

export default TeamMembers;