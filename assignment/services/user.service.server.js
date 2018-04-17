var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var userModel = require('../model/user/user.model.server')
var bcrypt = require('bcrypt-nodejs');

passport.serializeUser(serializeUser);
function serializeUser(user, done) {
  done(null, user);
}

passport.deserializeUser(deserializeUser);
function deserializeUser(user, done) {
  userModel
    .findUserById(user._id)
    .then(function (user) {
      done(null, user);
    }, function (error) {
      done(err, null);
    })
}

passport.use(new LocalStrategy(localStrategy));

function localStrategy(username, password, done) {
  console.log("user service server 25: username", username);
  userModel
    .findUserByUsername(username)
    .then(function (user) {
      console.log("user service server 29: requested username=" + username + " password=" + password + " found user=");
      console.log(user);
      // var hashed = bcrypt.hashSync("a"); console.log("test comparesync: " +
      // bcrypt.compareSync("a", hashed));
      if (user && bcrypt.compareSync(password, user.password)) {
        console.log("user service server 32: login verified")
        return done(null, user);
      } else {
        console.log("user service server 35: login fail")
        return done(null, false);
      }
    }, function (error) {
      if (error) {
        return done(error)
      }
    })
}

function login(req, res) {
  var user = req.user;
  // console.log("user service server 49: sent user:");
  // console.log(user);
  res.json(user);
}

function logout(req, res) {
  // console.log("user service server 49");
  req.logOut();
  res.send(200);
}

function register(req, res) {
  var user = req.body;
  console.log("user service server 61(register): before hashed password=" + user.password + " user:");
  console.log(user)
  user.password = bcrypt.hashSync(user.password);
  console.log("user service server 63: after hashed password=" + user.password);
  return userModel
    .createUser(user)
    .then(function (user) {
      if (user) {
        req
          .login(user, function (err) {
            if (err) {
              res
                .status(400)
                .send(err);
            } else {
              res.json(user);
            }
          })
      }
    })
}

function loggedin(req, res) {
  res.send(req.isAuthenticated()
    ? req.user
    : '0');
}
module.exports = function (app) {
  // for login use passport authenticate middleware before login handler
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/register', register);
  app.post('/api/loggedin', loggedin);

  // for createWebsite
  app.post('/api/user', function (req, res) {
    var user = req.body;
    userModel
      .createUser(user)
      .then(function (doc) {
        res.send(doc)
      }, function (error) {
        res
          .status(500)
          .send('user creation failure!')
      })
  });

  app.get('/api/user', function (req, res) {
    var userName = req.query.username;
    if (userName == null) {
      return res.status(400);
    }
    var password = req.query.password;
    if (password == null) {
      // provide findUserByUserName service
      userModel
        .findUserByUsername(userName)
        .then(function (doc) {
          res.send(doc)
        }, function (error) {
          // console.log('no such name exists')
          res
            .status(500)
            .send('No such username exists!')
        })
    } else {
      // provide findUserByCredentials
      userModel
        .findUserByCredentials(userName, password)
        .then(function (doc) {
          res.send(doc)
        }, function (error) {
          // console.log('no matched usernae and password')
          res
            .status(500)
            .send('No matched username and password!')
        })
    }
  });

  // for findWebsiteById
  app.get('/api/user/:userId', function (req, res) {
    var userId = req.params.userId;
    // console.log("user service server 136: userId=", userId);
    userModel
      .findUserById(userId)
      .then(function (doc) {
        // console.log("user service server 140: user=", doc);
        res.send(doc)
      }, function (error) {
        res
          .status(500)
          .send('no user found with the id!')
      })
  });

  // for update
  app.put('/api/user/:userId', function (req, res) {
    var userId = req.params.userId;
    var user = req.body;
    userModel
      .updateUser(userId, user)
      .then(function (doc) {
        res.send(doc)
      }, function (error) {
        res
          .status(500)
          .send('update uesr failure!')
      })
  });

  // for delete
  app.delete('/api/user/:userId', function (req, res) {
    var userId = req.params.userId;
    userModel
      .deleteUser(userId)
      .then(function (doc) {}, function (error) {
        res
          .status(500)
          .send('delete uesr failure!')
      })
  });
}