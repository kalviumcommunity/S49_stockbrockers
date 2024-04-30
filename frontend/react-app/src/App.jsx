import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserProfile from './components/UserProfile';
import './components/update.css'; // Import the update.css file

function App() {
  const [stockbrokers, setStockbrokers] = useState([]);
  const [selectedBroker, setSelectedBroker] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({
    brokername: '',
    foundedin: '',
    accountopeningcharge: '',
    brocragechargedforfANDo: '',
    brocragechargedforstocks: '',
    accountmaintanencecharge: '',
    customercare: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/getStockbrocker');
      setStockbrokers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleUserProfileClick = () => {
    setSelectedBroker(null); // Reset selected broker
    setIsOpen('user'); // Show user profile form
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/deleteStockbroker/${id}`);
      alert('Stockbroker deleted successfully!');
      setStockbrokers(stockbrokers.filter(broker => broker._id !== id)); // Remove deleted broker from the list
    } catch (error) {
      console.error('Error deleting stockbroker:', error);
    }
  };

  const handleUpdateClick = (broker) => {
    setSelectedBroker(broker);
    setIsOpen('update');
    setUpdateFormData({ ...broker }); // Set all form data to the selected broker's data
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdateFormData({ ...updateFormData, [name]: value });
  };

  const handleUpdateSubmit = async () => {
    try {
      await axios.put(`http://localhost:3000/updateStockbroker/${selectedBroker._id}`, updateFormData);
      alert('Stockbroker updated successfully!');
      setIsOpen(false);
      fetchData();
    } catch (error) {
      console.error('Error updating stockbroker:', error);
    }
  };

  return (
    <>
      <div>
        <nav>
          <h1>Welcome to stockbrokers</h1>
          <button onClick={handleUserProfileClick}>User Profile</button>
        </nav>
        <UserProfile 
          isOpen={isOpen === 'user'} 
          closeModal={closeModal} 
          selectedBroker={selectedBroker} 
        />

        <div className="stockbrokers-list">
          {stockbrokers.map((broker, index) => (
            <div key={broker._id} className="stockbroker">
              <h2>{broker.brokername}</h2>
              <p>Founded In: {broker.foundedin}</p>
              <p>Account Opening Charge: {broker.accountopeningcharge}</p>
              <p>Brokerage Charged for F&O: {broker.brocragechargedforfANDo}</p>
              <p>Brokerage Charged for Stocks: {broker.brocragechargedforstocks}</p>
              <p>Account Maintenance Charge: {broker.accountmaintanencecharge}</p>
              <p>Customer Care: {broker.customercare}</p>
              <button onClick={() => handleDelete(broker._id)}>Delete</button>
              <button onClick={() => handleUpdateClick(broker)}>Update</button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Update form */}
      <div className={`update-form ${isOpen === 'update' ? 'active' : ''}`}>
        <h2>Update Broker: {selectedBroker && selectedBroker.brokername}</h2>
        <form onSubmit={handleUpdateSubmit}>
          <input type="text" name="brokername" value={updateFormData.brokername} onChange={handleInputChange} />
          <input type="text" name="foundedin" value={updateFormData.foundedin} onChange={handleInputChange} />
          <input type="text" name="accountopeningcharge" value={updateFormData.accountopeningcharge} onChange={handleInputChange} />
          <input type="text" name="brocragechargedforfANDo" value={updateFormData.brocragechargedforfANDo} onChange={handleInputChange} />
          <input type="text" name="brocragechargedforstocks" value={updateFormData.brocragechargedforstocks} onChange={handleInputChange} />
          <input type="text" name="accountmaintanencecharge" value={updateFormData.accountmaintanencecharge} onChange={handleInputChange} />
          <input type="text" name="customercare" value={updateFormData.customercare} onChange={handleInputChange} />
          <button type="submit">Update</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </form>
      </div>
    </>
  );
}

export default App;
