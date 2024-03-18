// Assuming this is your server-side code (e.g., in your app.js or index.js file)

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors middleware
require('dotenv').config();
const Joi = require('joi'); // Import Joi for validation

const app = express();
const port = 3000;
const mongoURi = process.env.mongoURi;

// Import CRUD routes
const router = require('./routes.js');
const StockbrockerModel = require("./models/Stockbrocker.js");
const StockbrockerUserModel = require("./models/User.js");

// Validation schema for updating a stockbroker
const updateStockbrokerSchema = Joi.object({
  // Define your validation rules here for updating a stockbroker
  // Example:
  name: Joi.string(),
  // Add more fields and validations as needed
});

// Middleware for validating PUT request to update a stockbroker
function validateUpdateStockbroker(req, res, next) {
  const { error } = updateStockbrokerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}

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

const schema = Joi.object({
  name:Joi.string().required(),
  email:Joi.string().required(),
  password:Joi.string().min(6).required()
})

app.post('/postUserData', async (req,res) =>{
  let x= req.body
  console.log("data",x)
  const {error} = schema.validate(req.body)
  if(error){
    console.log(error.details[0].message,"sfsf")
    return res.status(400).send({"message":error.details[0].message})
  }
  
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

  let b = await TunevalleyUserModel.find()
  .then(users => res.json(users))
  .catch(err => res.json(err))
  console.log(b)
})

// Route to update a stockbroker
app.put('/updateStockbroker/:id', validateUpdateStockbroker, async (req, res) => {
  const id = req.params.id;
  const updatedBrokerData = req.body; // Assuming the updated data is sent in the request body
  try {
    const updatedStockbroker = await StockbrockerModel.findByIdAndUpdate(id, updatedBrokerData, { new: true });
    if (!updatedStockbroker) {
      return res.status(404).json({ error: 'Stockbroker not found' });
    }
    res.json(updatedStockbroker); // Sending the updated stockbroker back as the response
  } catch (error) {
    console.error('Error updating stockbroker:', error);
    res.status(500).json({ error: 'Internal Server Error' })
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`);
});
