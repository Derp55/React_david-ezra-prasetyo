import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    const dummyUser = { username: 'admin', password: 'password123' };
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.username === username && user.password === password) {
      localStorage.setItem('isLoggedIn', true);
      window.location.reload();
    } else if (username === dummyUser.username && password === dummyUser.password) {
      localStorage.setItem('user', JSON.stringify(dummyUser));
      localStorage.setItem('isLoggedIn', true);
      window.location.reload();
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Login;
