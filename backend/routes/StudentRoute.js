const express = require("express");
const { createAdmission } = require("../controllers/Student/StudentAdmissionController");


const router = express.Router();

router.route("/student/admission").post(createAdmission)

module.exports = router;