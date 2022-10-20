//react imports
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
//style
import './register.css'

import axios from "../api/axios";
import Login from "../login/Login";
const REGISTER_FORM = '/auth/register';

const Register = () => {

    const [values, setValues] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(REGISTER_FORM,
                ({ username, password, passwordConfirm }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            let value = { username, password, passwordConfirm };
            setValues([...values, value]);
            setUsername('');
            setPassword('');
            setPasswordConfirm('');

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
                    <label className="input-label">Password Confirm:</label>
                    <input
                        required
                        className="form-input"
                        type="text"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                    ></input>
                    <br></br>
                    <button
                        className="submit-button"
                        type="submit"
                    ><Link to="/login" className="submit-button">Register</Link></button>

                    <p>Already have an account <Link to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    )
}
export default Register; 