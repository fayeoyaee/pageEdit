var pageModel = require('../model/page/page.model.server')

module.exports = function(app) {
  // create
  app.post('/api/website/:websiteId/page', function(req, res) {
    var websiteId = req.params.websiteId;
    var page = req.body;

    pageModel.createPage(websiteId, page)
        .then(
            function(doc) {
              console.log('create page success')
              res.send(doc)
            },
            function(error) {
              console.log('create page failure')
              res.status(500).send('page creation failure!')
            })
  });

  // findAll
  app.get('/api/website/:websiteId/page', function(req, res) {
    var websiteId = req.params.websiteId;

    pageModel.findAllPagesForWebsite(websiteId).then(
        function(doc) {
          console.log('find page for websites success')
          res.send(doc)
        },
        function(error) {
          console.log('find all pages failure')
          res.status(500).send('find page for websites failure!')
        })
  });

  // findById
  app.get('/api/page/:pageId', function(req, res) {
    var pageId = req.params.pageId;

    pageModel.findPageById(pageId).then(
        function(doc) {
          console.log('find page by Id success')
          res.send(doc)
        },
        function(error) {
          console.log('find page by id failure')
          res.status(500).send('find page by Id failure!')
        })
  });

  // update
  app.put('/api/page/:pageId', function(req, res) {
    var pageId = req.params.pageId;
    var page = req.body;

    pageModel.updatePage(pageId, page)
        .then(
            function(doc) {
              console.log('update page success')
              res.send(doc)
            },
            function(error) {
              console.log('update page failure')
              res.status(500).send('update page failure!')
            })
  });

  // delete
  app.delete('/api/page/:pageId', function(req, res) {
    var pageId = req.params.pageId;
    pageModel.deletePage(pageId).then(
        function(doc) {
          console.log('delete page success')
          res.send(doc)
        },
        function(error) {
          console.log('delete page failure')
          res.status(500).send('delete page failure!')
        })
  });
}