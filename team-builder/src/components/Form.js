import React,{useState} from "react";

const Form = (props) => {
    const { submitPerson, initialPerson, buttonText, history} = props;
        const[person, setPerson] = useState(initialPerson || {name: "", email: "", role: ""});
    const changeHandler = event => {
        setPerson({...person, [event.target.name]: event.target.value });};

    const changeSubmit = event => {
        event.preventDefault();
        submitPerson(person);
        setPerson({name: "", email: "", role: ""})
        history.push("/");
    };    

    return (
        <form onSubmit={changeSubmit}>
            <input placeholder="name" value={person.name} name="name" onChange={changeHandler}/>
            <input placeholder="email" value={person.email} name="email" onChange={changeHandler}/>
            <input placeholder="role" value={person.role} name="role" onChange={
                changeHandler}/>
            <button type ="submit">{buttonText}</button>
        </form>
    );
};
 
export default Form;