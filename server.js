const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
//create port and start app;
const app = express();
const PORT = process.env.PORT || 3000;
//parsing and middleware

//start server