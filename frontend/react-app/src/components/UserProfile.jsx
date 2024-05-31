import React, { useState } from 'react';

const UserProfile = ({ isOpen, closeModal, handleLogin, isAuthenticated, handleSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit({ name, email, password });
  };

  if (!isOpen) return null;

  return (
    <div className="user-profile-modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        {isAuthenticated ? (
          <h2>Welcome Back!</h2>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <h2>Login</h2>
            <input 
              type="text" 
              name="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Name" 
              required 
            />
            <input 
              type="email" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email" 
              required 
            />
            <input 
              type="password" 
              name="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Password" 
              required 
            />
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
