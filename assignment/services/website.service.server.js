var websiteModel = require('../model/website/website.model.server')

module.exports = function(app) {
  // for createWebsite
  app.post('/api/user/:userId/website', function(req, res) {
    var userId = req.params.userId;
    var website = req.body;
    websiteModel.createWebsiteForUser(userId, website)
        .then(
            function(doc) {
              console.log('create website for user success')
              res.send(doc)
            },
            function(error) {
              console.log('create website for user failure')
              res.status(500).send('website creation failure!')
            })
  });

  // for findWebsitesByUserId
  app.get('/api/user/:userId/website', function(req, res) {
    var userId = req.params.userId;
    websiteModel.findAllWebsitesForUser(userId).then(
        function(doc) {
          console.log('find website for user success')
          res.send(doc)
        },
        function(error) {
          res.status(500).send('find website for user failure!')
        })
  });

  // for findWebsiteById
  app.get('/api/website/:websiteId', function(req, res) {
    var websiteId = req.params.websiteId;
    websiteModel.findWebsiteById(websiteId).then(
        function(doc) {
          console.log('find website by id success')
          res.send(doc)
        },
        function(error) {
          res.status(500).send('find website by id failure!')
        })
  });

  // for updateWebsite
  app.put('/api/website/:websiteId', function(req, res) {
    var websiteId = req.params.websiteId;
    var website = req.body;
    websiteModel.updateWebsite(websiteId, website)
        .then(
            function(doc) {
              console.log('update website success')
              res.send(doc)
            },
            function(error) {
              res.status(500).send('update website failure!')
            })
  });

  // deleteWebsite
  app.delete('/api/website/:websiteId', function(req, res) {
    console.log('Get delete website req');
    var websiteId = req.params.websiteId;
    websiteModel.deleteWebsite(websiteId).then(
        function(doc) {
          console.log('delete website success')
        },
        function(error) {
          res.status(500).send('update website failure!')
        })
  });
}