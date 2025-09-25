const express = require("express");
const {signup, login, logout, updateProfile} = require("../controller/auth.controller.js");
const {protectRoute} = require("../middleware/auth.middleware.js");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.put("/update-profile", protectRoute, updateProfile);

module.exports = router;