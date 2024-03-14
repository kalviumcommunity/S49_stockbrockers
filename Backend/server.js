const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors middleware
require('dotenv').config();

const app = express();
const port = 3000;
const mongoURi = process.env.mongoURi;

// Import CRUD routes
const router = require('./routes.js');
const StockbrockerModel = require("./models/Stockbrocker.js");
const StockbrockerUserModel = require("./models/User.js")

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// Connect to MongoDB
mongoose.connect(mongoURi, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Use CRUD routes
app.use("/crud", router);

// Ping route to check server status
app.get('/ping', (req, res) => {
  res.json({
    message: 'Server is running',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`);
});

// Route to fetch stockbrokers
app.get(`/getStockbrocker`, async (req, res) => {
  try {
    const x = await StockbrockerModel.find();
    res.json(x);
  
  } catch (error) {
    console.error('Error fetching stockbrockers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

});

app.post('/postUserData', async (req,res) =>{
  let x= req.body
  console.log(x)
    let a =await StockbrockerUserModel.create({
    Name: x.name,
    Email : x.email,
    password: x.password    
    })
   .then(users => res.json(users))
   .catch(err => res.json(err))
   console.log(a)
 })

app.get('/getUserData',async(req,res) =>{
  let b = await StockbrockerUserModel.find()
  .then(users => res.json(users))
  .catch(err => res.json(err))
  console.log(b)
})

module.exports = app;
