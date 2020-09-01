import React, { useState } from 'react';
import qs from 'qs'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit= async e => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/login",{
      method: "POST",
      mode: 'no-cors',
      headers:{
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: qs.stringify({user: username, password: password}),
    }).then((resp) => resp.json())
    .then(function(response) {
        console.info('fetch()', response);
        return response;
    });
    console.log("response1 = ", response);
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      Username: <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)}/>
      Password: <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
      <button type="submit">Отправить</button>
  <div>{message}</div>
      </form>
    </div>
  );
}

export default App;

 