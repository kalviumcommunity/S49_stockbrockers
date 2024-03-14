const mongoose = require('mongoose');

const StockbrockerUserSchema = new mongoose.Schema({
    Name: String,
    Email : String,
    password: String

})

const StockbrockerUserModel = mongoose.model("user", StockbrockerUserSchema);
module.exports = StockbrockerUserModel;