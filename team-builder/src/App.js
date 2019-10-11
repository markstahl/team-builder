import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form.js';
import TeamMembers from './components/TeamMembers.js';

function App() {
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Team</h1>
        <Form addTeamFn={addTeamMember} />
        <TeamMembers memberList={teamMembers} />
      </header>
    </div>
  );
}

export default App;
