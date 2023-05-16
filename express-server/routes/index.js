const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

router.get("/", bookingController.home);
router.post("/api/create-booking", bookingController.create);
router.get("/api/fetch-all-booking", bookingController.fetchAllBooking);

module.exports = router;
