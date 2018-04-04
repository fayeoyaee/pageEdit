var userModel = require('../model/user/user.model.server')

module.exports = function(app) {
  // for createWebsite
  app.post('/api/user', function(req, res) {
    var user = req.body;
    userModel.createUser(user).then(
        function(doc) {
          res.send(doc)
        },
        function(error) {
          res.status(500).send('user creation failure!')
        })
  });

  app.get('/api/user', function(req, res) {
    var userName = req.query.username;
    if (userName == null) {
      return res.status(400);
    }
    var password = req.query.password;
    if (password == null) {
      // provide findUserByUserName service
      userModel.findUserByUsername(userName).then(
          function(doc) {
            res.send(doc)
          },
          function(error) {
            console.log('no such name exists')
            res.status(500).send('No such username exists!')
          })
    } else {
      // provide findUserByCredentials
      userModel.findUserByCredentials(userName, password)
          .then(
              function(doc) {
                res.send(doc)
              },
              function(error) {
                console.log('no matched usernae and password')
                res.status(500).send('No matched username and password!')
              })
    }
  });

  // for findWebsiteById
  app.get('/api/user/:userId', function(req, res) {
    var userId = req.params.userId;
    userModel.findUserById(userId).then(
        function(doc) {
          res.send(doc)
        },
        function(error) {
          res.status(500).send('no user found with the id!')
        })
  });

  // for update
  app.put('/api/user/:userId', function(req, res) {
    var userId = req.params.userId;
    var user = req.body;
    userModel.updateUser(userId, user)
        .then(
            function(doc) {
              res.send(doc)
            },
            function(error) {
              res.status(500).send('update uesr failure!')
            })
  });

  // for delete
  app.delete('/api/user/:userId', function(req, res) {
    var userId = req.params.userId;
    userModel.deleteUser(userId).then(
        function(doc) {},
        function(error) {
          res.status(500).send('delete uesr failure!')
        })
  });
}