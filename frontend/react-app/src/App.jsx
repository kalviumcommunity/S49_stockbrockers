import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import UserProfile from './components/UserProfile';

function App() {
  const [stockbrokers, setStockbrokers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedBroker, setSelectedBroker] = useState(null);

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
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/deleteStockbrocker/${id}`);
      alert('Stockbroker deleted successfully!');
      fetchData(); // Fetch data again after deletion
    } catch (error) {
      console.error('Error deleting stockbroker:', error);
    }
  };

  const handleUpdate = (broker) => {
    setSelectedBroker(broker);
    setShowForm(true);
  };

  const handleUpdateSubmit = async (updatedBroker) => {
    try {
      const response = await axios.put(`http://localhost:3000/updateStockbroker/${updatedBroker._id}`, updatedBroker);
      if (response.status === 200) {
        alert('Stockbroker updated successfully!');
        setShowForm(false); // Close modal after updating
        fetchData(); // Fetch data again after updating
      } else {
        console.error('Unexpected status code:', response.status);
      }
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
        <UserProfile isOpen={showForm} closeModal={closeModal} fetchData={fetchData} selectedBroker={selectedBroker} handleUpdateSubmit={handleUpdateSubmit} />
        <div className="stockbrokers-list">
          {stockbrokers.map((broker, index) => (
            <div key={index} className="stockbroker">
              <h2>{broker.brokername}</h2>
              <p>Founded In: {broker.foundedin}</p>
              <p>Account Opening Charge: {broker.accountopeningcharge}</p>
              <p>Brokerage Charged for F&O: {broker.brocragechargedforfANDo}</p>
              <p>Brokerage Charged for Stocks: {broker.brocragechargedforstocks}</p>
              <p>Account Maintenance Charge: {broker.accountmaintanencecharge}</p>
              <p>Customer Care: {broker.customercare}</p>
              <button onClick={() => handleUpdate(broker)}>Update</button>
              <button onClick={() => handleDelete(broker._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
