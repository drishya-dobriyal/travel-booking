const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

router.get("/", bookingController.home);
router.post("/api/create-booking", bookingController.create);

module.exports = router;
