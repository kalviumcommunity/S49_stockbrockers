const mongoose = require('mongoose');

const StockbrockerSchema = new mongoose.Schema({
    brokername: String,
    foundedin: String,
    accountopeningcharge:String,
    brocragechargedforfANDo: String,
    brocragechargedforstocks: String,
    accountmaintanencecharge: String,
    customercare: String
})

const StockbrockerModel = mongoose.model("stockes", StockbrockerSchema);
module.exports = StockbrockerModel;