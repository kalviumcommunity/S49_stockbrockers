import React, { useState, useEffect } from 'react';

const UserProfile = ({ isOpen, closeModal, fetchData, selectedBroker }) => {
  const [formData, setFormData] = useState({
    brokername: '',
    foundedin: '',
    accountopeningcharge: '',
    brocragechargedforfANDo: '',
    brocragechargedforstocks: '',
    accountmaintanencecharge: '',
    customercare: '',
  });

  // Populate form fields with selected broker details when it changes
  useEffect(() => {
    if (selectedBroker) {
      setFormData({
        brokername: selectedBroker.brokername,
        foundedin: selectedBroker.foundedin,
        accountopeningcharge: selectedBroker.accountopeningcharge,
        brocragechargedforfANDo: selectedBroker.brocragechargedforfANDo,
        brocragechargedforstocks: selectedBroker.brocragechargedforstocks,
        accountmaintanencecharge: selectedBroker.accountmaintanencecharge,
        customercare: selectedBroker.customercare,
      });
    }
  }, [selectedBroker]);

  // Other functions for handling form submission, etc.

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>User Profile</h2>
        <form onSubmit={handleSubmit}>
          {/* Form fields to update broker details */}
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
