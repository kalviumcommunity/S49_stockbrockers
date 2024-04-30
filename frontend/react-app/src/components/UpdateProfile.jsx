
function App() {
  const [stockbrokers, setStockbrokers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedBroker, setSelectedBroker] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen('user'); // Show user profile form
  };

  const closeModal = () => {
    setShowForm(false);
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

  return (
    <>
      <div>
        <nav>
          <h1>Welcome to stockbrokers</h1>
          <button onClick={handleUserProfileClick}>User Profile</button>
        </nav>
        <UserProfile 
          isOpen={isOpen} 
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
