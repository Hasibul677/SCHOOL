const express = require("express");
const { createUser } = require("../controllers/User/UserController");


const router = express.Router();

router.route("/createUser").post(createUser);



module.exports = router;