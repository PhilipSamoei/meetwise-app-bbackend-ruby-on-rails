import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/login.css'
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Input validation
    if (name.trim() === '') {
      setError('Please enter a name');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, passwordConfirmation }),
    })
      .then((response) => response.json())
      .then((data) => {
        // If signup is successful, navigate to the login page
        navigate('/login');
      })
      .catch((error) => {
        console.error(error);
        // Handle signup error and display appropriate message to the user
      });
  };

  // Helper function to validate email address using regex
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className="container-login">
      <h2 style={{color: '#F7F7F7'}}>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
           style={{backgroundColor: '#F4FEFD'}}
            type="text"
            placeholder=" Username"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
           style={{backgroundColor: '#F4FEFD'}}
            type="email"
            placeholder=" email address"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
           style={{backgroundColor: '#F4FEFD'}}
            type="password"
            placeholder=" password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordConfirmation" className="form-label">
            Confirm Password
          </label>
          <input
           style={{backgroundColor: '#F4FEFD'}}
            type="password"
            placeholder="Confirm your password"
            className="form-control"
            id="passwordConfirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ marginRight: '20px' }}>
          Sign Up
        </button>
        <button type="button" className="btn btn-secondary" onClick={() => navigate('/login')}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Signup;
