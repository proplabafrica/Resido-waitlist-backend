const express = require("express");
const router = express.Router();
const {enterEmail} = require("../Controller/waitlistController")


router.post("/join", enterEmail)

module.exports = router;