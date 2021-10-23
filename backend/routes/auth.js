var express = require("express");
var router = express.Router();
const authController = require("../controller/auth-controller");

router.get("/indentify", authController.indentify);

module.exports = router;
