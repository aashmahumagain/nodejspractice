const express = require("express");
const app = express();
require("dotenv").config();

app.set("view engine", "ejs");

const PORT = process.env.PORT || 4008;

// routing set
const public_router = require("./routes/public_routes");
const admin_router = require("./routes/admin_routes");

app.use("/", public_router);
app.use("/admin", admin_router);

// 404 error handling
app.use((req, res, next) => {
    let error = new Error("404! page not found.");
    error.status = 404;
    next(error);
});

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});
