const express = require("express");
const router = express.Router();
const { list, show, create } = require("../Controllers/ordersController")

router.get("/orders", list);
router.get("/orders/:id", show);
router.post("/orders", create);

module.exports = router;