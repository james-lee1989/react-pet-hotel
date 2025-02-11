import React from 'react';
import { Link } from 'wouter';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/forms">Forms</Link>
        </div>
        <div>
          TODO: List of forms, or not enough permissions message
        </div>
      </div>
    </div>
  );
};

export default HomePage;
