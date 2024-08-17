const express = require("express");
const { successMessage } = require("../utils");
const router = express.Router();

router.get("/ping", (req, res) => {
  successMessage(res, "Server is running");
});

module.exports = router;
