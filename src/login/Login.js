//react imports
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

//style
import './login.css'

import axios from "../api/axios";

import Register from "../register/Register";
const LOGIN_FORM = '/auth/login';

const Login = () => {

    const [values, setValues] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_FORM,
                ({ username, password }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            let value = { username, password };
            setValues([...values, value]);
            setUsername('');
            setPassword('');


        } catch (err) {
            if (!err?.response) {
                return "no server response"
            }
        }

    }

    return (
        <div>
            <div className="form-container">
                <form onSubmit={handleSubmit} >
                    <br></br>
                    <br></br>
                    <label className="input-label">Name:</label>
                    <input
                        required
                        className="form-input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    ></input>
                    <br></br>
                    <label className="input-label">Password:</label>
                    <input
                        required
                        className="form-input"
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <br></br>
                    <button
                        className="submit-button"
                        type="submit"
                    ><Link to="/" className="submit-button">Login</Link></button>
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login; 