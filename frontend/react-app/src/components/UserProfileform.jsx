import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import "./UserProfile.css"

// Set the app element for react-modal
Modal.setAppElement('#root');

// UserProfileForm component for user profile
function UserProfileForm({ closeModal, formData, handleChange, handleSubmit }) {
  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Save Profile</button>
        <button type="button" onClick={closeModal}>Close</button>
      </form>
    </div>
  );
}

// UpdateForm component for updating stockbroker
function UpdateForm({ closeModal, selectedBroker, handleUpdateSubmit }) {
  const [formData, setFormData] = useState(selectedBroker);

  useEffect(() => {
    setFormData(selectedBroker);
  }, [selectedBroker]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleUpdateSubmit(selectedBroker._id, formData);
      closeModal();
    } catch (error) {
      console.error('Error updating stockbroker:', error);
    }
  };

  return (
    <div>
      <h2>Update Stockbroker</h2>
      <form onSubmit={handleSubmit}>
        {/* Render form fields for updating stockbroker */}
        <button type="submit">Update Stockbroker</button>
        <button type="button" onClick={closeModal}>Close</button>
      </form>
    </div>
  );
}

// UserProfile component
function UserProfile({ isOpen, closeModal, selectedBroker, handleUpdateSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isUpdate, setIsUpdate] = useState(false);

  // Populate form fields with selected broker details when it changes
  useEffect(() => {
    if (selectedBroker) {
      setFormData({
        name: selectedBroker.name || '',
        email: selectedBroker.email || '',
        password: selectedBroker.password || ''
      });
    }
  }, [selectedBroker]);

  const handleUpdateClick = () => {
    setIsUpdate(true);
  };

  const handleUserProfileClick = () => {
    setIsUpdate(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle submit for user profile
  };

  return (
    <div>
      <Modal
        className="user-profile-form"
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="User Profile Modal"
      >
        {isUpdate ? (
          <UpdateForm closeModal={closeModal} selectedBroker={selectedBroker} handleUpdateSubmit={handleUpdateSubmit} />
        ) : (
          <UserProfileForm closeModal={closeModal} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
        )}
      </Modal>
    </div>
  );
}

export default UserProfile;
