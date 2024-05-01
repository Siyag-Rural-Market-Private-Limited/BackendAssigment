const router = require("express").Router();
const { getOrderStatus } = require("../Controller/userController");

router.get("/getOrderStatus", getOrderStatus);

module.exports = router;
