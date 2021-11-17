const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { User } = require("../models");

const router = Router();

router.post("/create", function (req, res) {
  User.create({
    firstname: req.body.user.firstname,
    lastname: req.body.user.lastname,
    username: req.body.user.username,
    email: req.body.user.email,
    passwordhash: bcrypt.hashSync(req.body.user.passwordhash, 13),
    role: "user",
  })
    .then(function createSuccess(user) {
      let token = jwt.sign(
        {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          email: user.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: 60 * 60 * 24 }
      );

      res.status(200).json({
        user: user,
        message: "Account Successfully Created",
        sessionToken: token,
      });
    })
    .catch((e) => res.status(500).json({ message: e }));
});

router.post("/login", function (req, res) {
  User.findOne({
    where: {
      username: req.body.user.username,
    },
  })

    .then(function loginSuccess(user) {
      if (user) {
        bcrypt.compare(
          req.body.user.passwordhash,
          user.passwordhash,
          function (err, matches) {
            if (matches) {
              let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: 60 * 60 * 24,
              });

              res.status(200).json({
                user: user,
                message: "Login Successful",
                sessionToken: token,
              });
            } else {
              res.status(502).send({ error: "Login Failed" });
            }
          }
        );
      } else {
        res.status(500).json({ error: "User does not exist" });
      }
    })
    .catch((e) => res.status(500).json({ message: e.message }));
});

module.exports = router;
