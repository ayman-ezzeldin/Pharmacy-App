const express = require("express");

const {
  createOrder,
  capturePayment,
  getAllOrdersByUser,
  getOrderDetails,
  addOrder,
} = require("../../controllers/shop/order-controller");

const router = express.Router();

// router.post("/create", createOrder);
// router.post("/capture", capturePayment);

router.post("/add", addOrder);
router.get("/list/:userId", getAllOrdersByUser);
router.get("/details/:id", getOrderDetails);

module.exports = router;