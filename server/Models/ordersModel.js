const mongoose = require('mongoose');

let ordersSchema = new mongoose.Schema({
    id: Number,
    orderDate: String,
    orderTime: String,
    amount: Number
});

let Order = mongoose.model('Order', ordersSchema);

module.exports = Order;