const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"))

let tasksRoute = require("./Routes/taskRoute");
let ordersRoute = require("./Routes/orderRoute");
let messagesRoute = require("./Routes/messageRoute");
let foxRoute = require("./Routes/foxRoute");
let dataRoute = require("./Routes/dataRoute");

app.use(tasksRoute);
app.use(ordersRoute);
app.use(messagesRoute);
app.use(foxRoute);
app.use(dataRoute);

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://bakeran:m@1nfrMcat@cluster0-h9qpj.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

let port = 3001;
app.listen(port, (err) => {
    if (err) {
        return console.log("oops! you've made an error", err);
    }
    console.log("web server is now listening for messages on port ", port)
})