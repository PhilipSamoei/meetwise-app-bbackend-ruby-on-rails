import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './nav.css';

export const Nav = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');

    if (token && name) {
      setIsAuthenticated(true);
      setLoggedInUser({ name });
    } else {
      setIsAuthenticated(false);
      setLoggedInUser(null);
    }
  }, []);

  const handleLogoutClick = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    setIsAuthenticated(false);
    setLoggedInUser(null);
    navigate('/login');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/" style={{fontSize: "60px"}}>
         Meet<span style={{color: '#B38B59',fontSize: '30px'}}>wise</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            {isAuthenticated && (
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/events/create">
                  Create Event
                </NavLink>
              </li>
            )}
          </ul>

          {isAuthenticated ? (
            <>
              {loggedInUser && <p className="navbar-text mr-3">Welcome, {loggedInUser.name.toUpperCase()}</p>}
              <button className="btn btn-link text-light" onClick={handleLogoutClick}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-link text-light" onClick={handleLoginClick}>
                Login
              </button>
              <button className="btn btn-link text-light" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
