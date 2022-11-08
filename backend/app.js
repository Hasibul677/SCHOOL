const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
let cors = require("cors");
const errorMiddleware = require("./middleware/error");

app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

//Route imports
const student = require("./routes/StudentRoute");

app.use("/api/v1", student);

//Middleware for Error
app.use(errorMiddleware);

module.exports = app;
