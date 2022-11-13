const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
let cors = require("cors");
const fileUpload = require("express-fileupload");
const errorMiddleware = require("./middleware/error");

app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(fileUpload());

//Route imports
const student = require("./routes/StudentRoute");
const user = require("./routes/UserRoute");

app.use("/api/v1", student);
app.use("/api/v1", user);

//Middleware for Error
app.use(errorMiddleware);

module.exports = app;
