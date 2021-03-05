const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/user");

//authentication using passport
//telling passport to use local Strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback: true, //now we can add req as a 4th parameter in call back function to
      //show flash messages
    },
    //callback function to find username,password
    //done is callback function reporting to passport js
    function (req, email, password, done) {
      console.log(email);
      User.findOne({ email: email }, function (err, user) {
        if (err) {
          console.log(err);
          return done(err);
        }
        if (!user || user.password != password) {
          console.log("Invalid username/Password");

          return done(null, false);
        }
        //if user find
        return done(null, user);
        // console.log(user);
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    if (err) {
      console.log("error in finding user");
      return done(err);
    }

    return done(null, user);
  });
});
passport.checkAuthentication = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return;
};
passport.setAuthenticateduser = function (req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
  }
  next();
};
module.exports = passport;
