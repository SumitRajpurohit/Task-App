// components/UserAuth.js
import React, { useState } from 'react';

function UserAuth({ user, onRegister, onLogin, onLogout }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterClick = () => {
    // Validate username and password
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter both username and password.');
      return;
    }

    // Call the onRegister function from the parent component
    onRegister(username);
  };

  const handleLoginClick = () => {
    // Validate username and password
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter both username and password.');
      return;
    }

    // Call the onLogin function from the parent component
    onLogin(username);
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <button onClick={onLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>User Authentication</h2>
          <div>
            <h3>Register:</h3>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button onClick={handleRegisterClick}>Register</button>
          </div>
          <div>
            <h3>Login:</h3>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button onClick={handleLoginClick}>Login</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserAuth;
