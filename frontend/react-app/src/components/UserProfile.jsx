import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import "./UserProfile.css";

Modal.setAppElement('#root');

function UserProfile({ isOpen, closeModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    // Fetch user data when the component is mounted
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getUserData');
        setFormData({
          name: response.data.name || '',
          email: response.data.email || '',
          password: '' // Do not pre-fill password for security reasons
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (isOpen) {
      fetchUserData();
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/postUserData', formData);
      alert('User profile saved successfully!');
      closeModal();
    } catch (error) {
      console.error('Error saving user profile:', error.response ? error.response.data : error.message);
      alert('Error saving user profile: ' + (error.response ? error.response.data.message : error.message));
    }
  };

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
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Save Profile</button>
        <button type="button" onClick={closeModal}>Close</button>
      </form>
    </Modal>
  );
}

export default UserProfile;
