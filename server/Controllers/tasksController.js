const Task = require('../Models/tasksModel')

exports.list = function list(req, res) {
    Task.find((err, v) => res.json(v))
}

exports.show = function show(req, res) {
    Task.findById(req.params.id, (err, v) => res.json(v));
}

exports.create = function create(req, res) {
    let item = {
        id: req.body.id,
        task: req.body.task,
        date: req.body.date
    };
    let newTask = new Task(item)
    newTask.save();
}
