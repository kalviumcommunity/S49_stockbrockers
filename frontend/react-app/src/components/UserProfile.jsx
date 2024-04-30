import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import "./UserProfile.css";

Modal.setAppElement('#root');

function UserProfile({ isOpen, closeModal, selectedBroker, onUpdateSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    if (selectedBroker) {
      setFormData({
        name: selectedBroker.name || '',
        email: selectedBroker.email || '',
        password: selectedBroker.password || ''
      });
    } else {
      setFormData({
        name: '',
        email: '',
        password: ''
      });
    }
  }, [selectedBroker]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      // Send the form data to the specified API endpoint
      const response = await axios.post('http://localhost:3000/postUserData', formData);
      alert('User profile saved successfully!');
      closeModal();

      // Fetch the user data after saving
      const userDataResponse = await axios.get('http://localhost:3000/getUserData');
      console.log('User data:', userDataResponse.data);
    } catch (error) {
      alert(error.response.data.message)
      console.log(error.response.data.message,"zx")
    }
  };

  
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/updateStockbroker/${selectedBroker._id}`, formData);
      if (response.status === 200) {
        alert('Stockbroker updated successfully!');
        closeModal();
      } else {
        console.error('Unexpected status code:', response.status);
      }
    } catch (error) {
      console.error('Error updating stockbroker:', error);
    }
  };
  return (
    <div>

      {/* User Profile Modal */}
      <Modal
        className="user-profile-form"
        isOpen={isOpen === 'user'}
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
          <button type="button" onClick={() => closeModal()}>Close</button>
        </form>
      </Modal>
    </div>
  );
}

export default UserProfile;
