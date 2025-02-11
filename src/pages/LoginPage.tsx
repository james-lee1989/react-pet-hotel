import React, { useState } from 'react';
import { useLocation } from 'wouter';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [, setLocation] = useLocation();

  const handleLogin = async () => {
    try {
      setLocation('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

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
