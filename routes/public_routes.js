const express = require("express");
const appRouter = express.Router();

const {
    getFirstPage,
    getAboutPage,
    getContactPage,
    getLoginController
} = require("../controller/public_controller");

appRouter.get("/", getFirstPage);
appRouter.get("/about", getAboutPage);
appRouter.get("/contat", getContactPage);
appRouter.get("/login", getLoginController);

module.exports = appRouter;