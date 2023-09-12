import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/login.css';
const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // Store token in local storage
        localStorage.setItem('name', data.name); // Store name in local storage
        navigate('/');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Invalid Username or Password');
      }
    } catch (error) {
      console.error(error);
      setError('Invalid Username or Password');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate('/signup');
  };

  return (
    <div className="container-login">
      <h1 style={{color: '#F7F7F7'}}>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleLogin}>
        <div className="mb-3">
         
          <input
           style={{backgroundColor: '#F4FEFD'}}
            type="text"
            placeholder="Username"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          
          <input
          style={{backgroundColor: '#F4FEFD'}}
            type="password"
            className="form-control"
            placeholder=" password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
