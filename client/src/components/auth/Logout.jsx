import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogoutClick = (e) => {
    e.preventDefault()
    fetch("/logout", {
      method: "DELETE",
    })
    navigate('/login');
  };

  return (
    <div className="container">
      <h2>Logout</h2>
      <p>Are you sure you want to logout?</p>
      <button type="button" className="btn btn-primary" onClick={handleLogoutClick}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
