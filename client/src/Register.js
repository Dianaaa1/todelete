import React, { useState } from 'react';
import qs from 'qs'

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            body: qs.stringify({ username: username, password: password }),
        }).then(response => {
            console.log("res  ", response)
            return response.clone().text()
        })
            .then((response) => {
                console.log("response1 = ", response);
                setMessage(response)
            })
            .catch((error) => {
                Promise.reject(error)
            })

    }
    return (
        <div className="Login">
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
                Username: <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                Password: <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />

                <button type="submit">Зарегистрироваться</button>
                <div>{message}</div>
            </form>
        </div>
    );
}

export default Register;