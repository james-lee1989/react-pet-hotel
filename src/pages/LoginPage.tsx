import { useEffect, useState } from "react";
import { User } from "./../api/types";
import { useLocation } from 'wouter';
import { useAuthContext } from "../contexts/AuthContext";


function LoginPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [, navigate] = useLocation();
  const {setUser, setIsLoggedIn} = useAuthContext();

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
      setError(null);
    } catch(e) {
      console.error(e);
      setError("Failed to load users");
    }
    setLoading(false);
  };

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }

  const ifUserAnthenticated = (name: string) => {
    return users.find((user) => user.username === name) !== undefined;
  }

  const getUserbyUserName = (name: string) => {
    return users.find((user) => user.username === name);
  }

  const handleLogin = () => {
    if (ifUserAnthenticated(userName)) {
      const user = getUserbyUserName(userName);
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
        navigate('/');
      }
    }
  }
  
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading users...</p>;  
  }

  if (error) {
    return <p style={{ color: 'red'}}>{error}</p>;
  }

  return (
    <div>
      <h1>Login</h1>
      <input 
        value={userName}
        onChange={handleUserNameChange}
      />
      <button
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default LoginPage;
