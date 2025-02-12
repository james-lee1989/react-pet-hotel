import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');

  const handleLogin = async () => {};

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
