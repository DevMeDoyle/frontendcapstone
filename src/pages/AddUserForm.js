import React from 'react'
import "../assets/css/Userform.css"
import Footer from "../components/Footer.js"
import Header from '../components/Header'
import {useState,useEffect} from "react";

const AddUserForm = (props) => {


    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorFirstname, setErrorFirstname] = useState("");
    const [errorLastname, setErrorLastname] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const validateForm = ()=>{

        let isValidated = false;

    
    if(firstName === "")

    {
        setErrorFirstname("You Must Enter a First Name");
        isValidated = false;
    }

    else
    {
        setErrorFirstname("")
    }

    if(lastName === "")

    {
        setErrorLastname("You must enter a Last Name");
        isValidated = false;
    }

    else{
        setErrorLastname("")
    }

    if(email === "")

    {
        setErrorEmail("You must enter an Email ");
        isValidated = false;
    }

    else{
        setErrorEmail("")
    }

    if(password === "")

    {
        setErrorPassword("You Must Enter A PASSWORD");
        isValidated = false;
    }

    else{
        setErrorPassword("")
    }

    return isValidated;
    
}

const push= ()=>{


    const formData = new FormData();

    formData.append('firstName', firstName );
    formData.append('lastName',lastName);
    formData.append('email',email);
    formData.append('password',password);
   
   


    fetch('http://localhost:5000/user', {
    method: 'POST',
    body: formData,
    })
    .then(response => response.json())
    .then(result => {

        alert("Welcome")
        console.log(result)
        console.log('Success:');
    })
    .catch(error => {
        alert("Error Check Your form")
    console.log('Error:', error);
    });
    
}
    return (
       
         <>

         <Header/>
       
                     <div>
            

                  

                <div className="FormContainer">
                    <h1> Registration Form </h1>

                    <form className="b" onSubmit={push}> 
           
                        <div className="field">
                                <label className="label is-small">First Name</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input is-small" type="text" placeholder="First Name" value={firstName} onChange={(event)=>{ setFirstname(event.target.value); }}/>
                                        <div className="error"> {errorFirstname}</div> 
                                                </div> 
                    </div> 

                    <div className="field">
                        <label className="label is-small">Last Name</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input is-small" type="text" placeholder="LastName" value={lastName} onChange={(event)=>{ setLastname(event.target.value); }} /> 
                                <div className="error"> {errorLastname}</div>
                                         </div>
                    </div>

                    <div class="field">

                                <label className="label is-small">Email</label>
                                    <p className="control has-icons-left has-icons-right">
                                        <input className="input" type="email" placeholder="Email" value={email} onChange={(event)=>{ setEmail(event.target.value); }}/>
                                        
                                </p>
                                <div className="error"> {errorEmail}</div>
                                </div>

                                <div className="field">
                                <label className="label is-small">Password</label>
                                <p className="control has-icons-left label is-small" >
                                    <input className="input" type="password" placeholder="Password" value={password} onChange={(event)=>{ setPassword(event.target.value); }} />
                                    
                                </p>

                                <div className="error"> {errorPassword}</div>
                                </div>
                                <div className="field">
                                <p className="control">
                                    <button className="button is-success">
                                    Register
                                    </button>
                                </p>
                                </div>

                             </form>

                       </div>   
                </div>
        
        
               
        </>
        
    )
}

export default AddUserForm
