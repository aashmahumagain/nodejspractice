const express = require("express");
const appRouter = express.Router();

const {
  getFirstPage,
  getAboutPage,
  getContactPage,
  getLoginController,
  getRegisterController,
} = require("../controller/public_controller");

appRouter.get("/", getFirstPage);
appRouter.get("/about", getAboutPage);
appRouter.get("/contat", getContactPage);
appRouter.get("/login", getLoginController);
appRouter.get("/register", getRegisterController);

module.exports = appRouter;
