const catchAsyncErrors = require("../../middleware/catchAsyncErrors");
const crypto = require("crypto");
const cloudinary = require("cloudinary");
const User = require("../../models/User/UserModel");
const sendToken = require("../../utilitis/jwtToken");

exports.createUser = catchAsyncErrors(async (req, res, next) => {

  const myCloud = await cloudinary.v2.uploader.upload(req.body.profile, {
    folder: "schools",
    width: "auto",
    crop: "scale",
  });
  const { name, email, password} = req.body;

  const user = await User.create({
    name,
    email,
    password,
    profile: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
  });

 
  sendToken(user, 201, res);
});
