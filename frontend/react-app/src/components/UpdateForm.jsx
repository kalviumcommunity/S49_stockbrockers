import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './UserProfile.css'; // Import CSS for UserProfile component

Modal.setAppElement('#root');

function UserProfile({ isOpen, closeModal, formData, handleSubmit, handleChange }) {
  return (
    <Modal
      className="user-profile-form"
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="User Profile Modal"
    >
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        <label>Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Save Profile</button>
        <button type="button" onClick={closeModal}>Close</button>
      </form>
    </Modal>
  );
}

export default UserProfile;
