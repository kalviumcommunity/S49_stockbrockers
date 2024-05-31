// AddEntityForm.jsx

import React, { useState } from 'react';
import axios from 'axios';

function AddEntityForm({ fetchData }) {
  const [formData, setFormData] = useState({
    // Define initial form data here
    brokername: '',
    foundedin: '',
    accountopeningcharge: '',
    brocragechargedforfANDo: '',
    brocragechargedforstocks: '',
    accountmaintanencecharge: '',
    customercare: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make a POST request to add the entity
      await axios.post('http://localhost:3000/addEntityEndpoint', formData);
      // Fetch updated data after adding the entity
      fetchData();
      // Reset form data
      setFormData({
        brokername: '',
        foundedin: '',
        accountopeningcharge: '',
        brocragechargedforfANDo: '',
        brocragechargedforstocks: '',
        accountmaintanencecharge: '',
        customercare: ''
      });
    } catch (error) {
      console.error('Error adding entity:', error);
    }
  };

  return (
    <div className="add-entity-form">
      <h2>Add Entity</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for entity data */}
        <input type="text" name="brokername" value={formData.brokername} onChange={handleInputChange} placeholder="Broker Name" />
        {/* Add more input fields for other entity properties */}
        <button type="submit">Add Entity</button>
      </form>
    </div>
  );
}

export default AddEntityForm;
