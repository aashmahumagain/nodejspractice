exports.getFirstPage = (req, res) => {
  res.render("index");
};

exports.getAboutPage = (req, res) => {
  res.json("Hello about page!");
};

exports.getContactPage = (req, res) => {
  res.json("Hello contact page!");
};

exports.getLoginController = (req, res) => {
  res.render("users/index", { title: "Login" });
};

exports.getRegisterController = (req, res) => {
  res.render("users/register", { title: "Register" });
};
