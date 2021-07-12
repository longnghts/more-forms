import React, { useState } from 'react';

const UserForm = props => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [confPasswordError, setConfPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confPassword };
        console.log('Welcome', newUser);
        setHasBeenSubmitted( true );
    };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1){
            setFirstNameError("First Name is required!");
        } else if(e.target.value.length < 3) {
            setFirstNameError("First name must be at least 3 characters long!");
        } else if(e.target.value.length > 3) {
            setFirstNameError("")
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1){
            setLastNameError("Last Name is required!");
        } else if(e.target.value.length < 3) {
            setLastNameError("Last name must be at least 3 characters long!");
        } else if(e.target.value.length > 3) {
            setLastNameError("")
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1){
            setEmailError("Email is required!");
        } else if(e.target.value.length < 3) {
            setEmailError("Email must be at least 3 characters long!");
        } else if(e.target.value.length > 3) {
            setEmailError("")
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1){
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 3) {
            setPasswordError("Password must be at least 3 characters long!");
        } else if(e.target.value.length > 3) {
            setPasswordError("")
        }
    }
    const handleConfPassword = (e) => {
        setConfPassword(e.target.value);
        if(e.target.value.length < 1){
            setConfPasswordError("Conf Password is required!");
        } else if(e.target.value.length < 3) {
            setConfPasswordError("Conf Password must be at least 3 characters long!");
        } else if(e.target.value != password) {
            setConfPasswordError("Passwords must match!")
        } else if(e.target.value.length > 3){
            setConfPasswordError("")
        }
    }

    return (
        <div className="container">
            <form onSubmit={ createUser }>
                <h3>{ formMessage() }</h3>
                <div className="form-group">
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" className="form-control" onChange= { handleFirstName } />
                    {
                        firstNameError ?
                        <p style={{color: 'red'}}>{firstNameError}</p> : ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" className="form-control" onChange={ handleLastName } />
                    {
                        lastNameError ?
                        <p style={{color: 'red'}}>{lastNameError}</p> : ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address: </label>
                    <input type="text" name="email" className="form-control" onChange={ handleEmail } />
                    {
                        emailError ?
                        <p style={{color: 'red'}}>{emailError}</p> : ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" className="form-control" onChange={ handlePassword } />
                    {
                        passwordError ?
                        <p style={{color: 'red'}}>{passwordError}</p> : ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="confPassword">Confirm Password: </label>
                    <input type="password" name="confPassword" className="form-control" onChange={ handleConfPassword }/>
                    {
                        confPasswordError ?
                        <p style={{color: 'red'}}>{confPasswordError}</p> : ""
                    }
                </div>
                <input type="submit" value="Submit" className="btn btn-danger"/>
            </form>

            <h2>Results:</h2>
            <h4>First Name: {firstName}</h4>
            <h4>Last Name: {lastName}</h4>
            <h4>Email: {email}</h4>
            <h4>Password: {password}</h4>
            <h4>Conf Password: {confPassword}</h4>

        </div>
    )
}

export default UserForm;
