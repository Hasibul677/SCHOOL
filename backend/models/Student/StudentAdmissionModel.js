const mongoose = require("mongoose");
const validator = require("validator");

const admissionSchema = new mongoose.Schema(
  {
    // Student Information
    fullName: {
      type: String,
      required: [true, "Please Enter Student Name"],
      maxLength: [30, "Name cann't exceed 30 characters"],
      minLength: [4, "Name should have more than 4 characters"],
    },
    addClass: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    birth: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Please enter the email"],
      unique: true,
      validate: [validator.isEmail, " Please enter a valid email"],
    },
    division: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    upazila: {
      type: String,
      required: true,
    },
    village: {
      type: String,
      required: true,
    },
    religion: {
      type: String,
      required: true,
    },
    birthCertificate: {
      type: String,
      required: true,
    },
    religion: {
      type: String,
      required: true,
    },
    blood: {
      type: String,
      required: true,
    },
    transport: {
      type: String,
      required: true,
    },
    studentAvatar: {
      public_id: { type: String, required: true },
    },
    url: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "student",
    },

    // Guardians Information

    fatherName: {
      type: String,
      required: [true, "Please Enter Father's Name"],
      maxLength: [30, "Name cann't exceed 30 characters"],
      minLength: [4, "Name should have more than 4 characters"],
    },
    motherName: {
      type: String,
      required: [true, "Please Enter Mother's Name"],
      maxLength: [30, "Name cann't exceed 30 characters"],
      minLength: [4, "Name should have more than 4 characters"],
    },
    guardianPhone: {
      type: Number,
      required: true,
    },
    fatherNID: {
      type: Number,
      required: true,
    },
    fatherAvatar: {
      public_id: { type: String, required: true },
    },
    url: {
      type: String,
      required: true,
    },
    // Student Previous Education Information
    previousSchlName: {
      type: String,
      required: true,
    },
    previousClass: {
      type: Number,
      required: true,
    },
    preRoll: {
      type: Number,
      required: true,
    },
    preSchoolAddress: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Admission", admissionSchema);
