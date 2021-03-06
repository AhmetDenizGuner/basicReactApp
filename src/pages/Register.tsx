import React, {SyntheticEvent, useState} from 'react';
import {Navigate} from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()
        const response = await fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        return <Navigate to="/login" />
    }

    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Lets Register</h1>
            <input  className="form-control"  placeholder="Name"
                onChange={e => setName(e.target.value)}
            />
            <input type="email" className="form-control"  placeholder="Email address"
                   onChange={e => setEmail(e.target.value)}
            />
            <input type="password" className="form-control"  placeholder="Password"
                   onChange={e => setPassword(e.target.value)}
            />
            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </form>
    );
};

export default Register;
