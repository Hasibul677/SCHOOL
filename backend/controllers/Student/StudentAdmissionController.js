const catchAsyncErrors = require("../../middleware/catchAsyncErrors");
const Admission = require("../../models/Student/StudentAdmissionModel");

exports.createAdmission = catchAsyncErrors(async (req, res, next) => {

    const admission = await Admission.create(req.body);

    if (admission) {
        res.status(201).json({
            success: true,
            admission
        })
    } else {
        res.status(400)
        throw new Error("Student data not save")
    }
});