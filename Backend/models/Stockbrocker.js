const mongoose = require('mongoose');

const StockbrockerSchema = new mongoose.Schema({
    brokername: String,
    foundedin: Number,
    accountopeningcharge:Number,
    brocragechargedforfANDo: Number,
    brocragechargedforstocks: Number,
    accountmaintanencecharge: Number,
    customercare: Number
})

const StockbrockerModel = mongoose.model("stockes", StockbrockerSchema);
module.exports = StockbrockerModel;