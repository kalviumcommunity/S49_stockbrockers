import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import UserProfile from './components/UserProfile';

function App() {
  const [stockbrocker, setStockbrocker] = useState([]);
  const [showForm, setShowForm] = useState(false);



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/getStockbrocker`); // Changed URL here
      setStockbrocker(response.data);
      // console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleUserProfileClick = () => {
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
  };

  return (
    <> 
    <div>
      <nav>
        
        <h1>Welcome to stockbrockers</h1>
        <a href="#" onClick={handleUserProfileClick}>User Profile</a>
      </nav>
      <UserProfile isOpen={showForm} closeModal={closeModal} />

      <div className="stockbrockers-list">
        {stockbrocker.map((stockbrocker, index) => (
          <div key={index} className="stockbrocker">
            <h2>{stockbrocker.brokername}</h2>
            <p>Founded In: {stockbrocker.foundedin}</p>
            <p>Account Opening Charge: {stockbrocker.accountopeningcharge}</p>
            <p>Brokerage Charged for F&O: {stockbrocker.brocragechargedforfANDo}</p>
            <p>Brokerage Charged for Stocks: {stockbrocker.brocragechargedforstocks}</p>
            <p>Account Maintenance Charge: {stockbrocker.accountmaintanencecharge}</p>
            <p>Customer Care: {stockbrocker.customercare}</p>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default App;
