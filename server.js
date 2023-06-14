// MVC
// * model.view.controller
const path = require('path')

const express = require("express");
const bodyParser = require("body-parser");
// *Database connection
require("./utils/database");
// *end connection
const { setStatics } = require("./utils/statics");
const adminRoutes = require("./routes/admin");
const indexRoutes = require("./routes/index");
const errorController = require("./controllers/error");
const app = express();

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
// end of middleware

// EJS
app.set("view engine", "ejs");
app.set("views", "views");
// end of EJS

// statics
setStatics(app);

// routes
app.use(indexRoutes);
app.use("/admin", adminRoutes);

// end of Routes

// 404
app.use(errorController.get404);

app.listen(3000, () => console.log("server is running"));
