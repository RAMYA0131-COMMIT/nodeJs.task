const express = require("express");
const router = express.Router();
const controller = require("../controllers/TempleRunCafe.controllers");
router.post("/ramya" , controller.usercafeeDay);
router.post("/login",controller.login);

module.exports=router;