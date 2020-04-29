import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form.js';
import TeamMembers from './components/TeamMembers.js';

function App() {
  const [memberToEdit, setMemberToEdit] = useState({});
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Mark Stahl",
      email: "markstahl0219@gmail.com",
      role: "Software Engineer/Ninja"
    }
  ]);

  const addTeamMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMembers([...teamMembers, newMember]);
  };

  const editMember = (team) => {
    setTeamMembers([...teamMembers].map(member => {
      if (member.id === memberToEdit.id) {
        return team;
      } else {
        return member;
      }
    }));
    setMemberToEdit({});
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Dream Team</h1>
        <Form addTeamFn={addTeamMember} />
        <TeamMembers memberList={teamMembers} memberToEdit={memberToEdit} editMember={editMember}/>
      </header>
    </div>
  );
}

export default App;
