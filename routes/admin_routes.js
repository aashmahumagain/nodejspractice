const express = require("express");
const adminRoutes = express.Router();

const {
    getAdmin,
    getArticle,
    getCategory
} = require("../controller/admin_controller");

adminRoutes.get("/", getAdmin);
adminRoutes.get("/articles", getArticle);
adminRoutes.get("/categories", getCategory);

module.exports = adminRoutes;