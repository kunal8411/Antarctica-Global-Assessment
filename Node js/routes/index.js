const express = require("express");
const path = require("path");
const router = express.Router();
const userController = require("../controllers/user-controller");

const passport = require("passport");

router.post("/create", userController.create);

router.post(
  "/createsession",
  passport.authenticate("local", {
    failureRedirect: "/",
  }),
  userController.creteSession
);

router.get("/getallusers", userController.findallusers);
router.post("/searchbyfristname", userController.finduserbyFirstName);
router.post("/searchbylastname", userController.finduserbyLastName);
router.post("/sortusers",userController.sortUsers );


module.exports = router;
