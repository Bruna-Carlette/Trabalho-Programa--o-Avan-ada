var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/message", function (req, res, next) {
  res.render("node", { message: "Informe aqui o seu Nome:" });
});

router.post("/message", function (req, res, next) {
  var messageVar = req.body.messageBody;
  res.redirect("/message/" + messageVar);
});

router.get("/message/:msgParams", function (req, res, next) {
  res.render("node", { message: req.params.msgParams });
});

var User = require("../models/user");

router.get("/node-mongodb-mongoose-user", function (req, res, next) {
  res.render("node");
});

router.get("/node-mongodb-mongoose-user-busca", function (req, res, next) {
  User.findOne({}, function (err, documents) {
    if (err) {
      return res.send("Error!! :-(");
    }
    res.render("node", {
      firstNameV: documents.firstName,
      lastNameV: documents.lastName,
      passwordV: documents.password,
      emailV: documents.email,
      messagesV: documents.message,
    });
  });
});

router.post("/node-mongodb-mongoose-user", function (req, res, next) {
  var emailVar = req.body.emailBody;
  var userObject = new User({
    firstName: "Bruna",
    lastName: "Carlette",
    password: "Segredo",
    email: emailVar,
  });
  userObject.save();
  res.redirect("/node-mongodb-mongoose-user");
});

module.exports = router;
