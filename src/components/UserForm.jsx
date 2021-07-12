import React, { useState } from 'react';

const UserForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" className="form-control" onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" className="form-control" onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address: </label>
                    <input type="text" name="email" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" className="form-control" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="confPassword">Confirm Password: </label>
                    <input type="password" name="confPassword" className="form-control" onChange={(e) => setConfPassword(e.target.value)}/>
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
