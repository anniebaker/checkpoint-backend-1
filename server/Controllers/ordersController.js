const Order = require('../Models/ordersModel')

exports.list = function list(req, res) {
    Order.find((err, v) => res.json(v))
}

exports.show = function show(req, res) {
    Order.findById(req.params.id, (err, v) => res.json(v))
}

exports.create = function create(req, res) {
    let item = {
        id: req.body.id,
        orderDate: req.body.orderDate,
        orderTime: req.body.orderTime,
        amount: req.body.amount
    };
    let newOrder = new Order(item)
    newOrder.save();
}