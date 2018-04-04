var widgetModel = require('../model/widget/widget.model.server')

module.exports = function(app) {
  // create
  app.post('/api/page/:pageId/widget', function(req, res) {
    // console.log('widget service server create')
    var pageId = req.params.pageId;
    var widget = req.body;

    widgetModel.createWidget(pageId, widget)
        .then(
            function(widget) {
              //   console.log('widget service server returned widget:')
              //   console.log(widget)
              res.send(widget)
            },
            function(error) {
              res.status(500).send({errMsg: 'create widget failure!'})
            })
  });

  // findAll
  app.get('/api/page/:pageId/widget', function(req, res) {
    // console.log('widget service get find all')
    var pageId = req.params.pageId;

    widgetModel.findAllWidgetsForPage(pageId).then(
        function(widgetIds) {
          if (widgetIds.length === 0) {
            // console.log('widget service sending find all empty results')
            res.send([])
          }
          widgetArray = [];
          visited = 0;
          for (var i = 0; i < widgetIds.length; i++) {
            (function(i) {
              widgetModel.findWidgetById(widgetIds[i]).exec(function(err, o) {
                // console.log(i)
                // console.log(o)
                visited++;
                if (o != null) {
                  widgetArray[i] = o;
                }
                if (visited === widgetIds.length) {
                  console.log(
                      'widget service sending find all results:' +
                      widgetArray.length);
                  res.send(widgetArray)
                }
              })
            })(i)
          }
        },
        function(error) {
          //   console.log('widget service server find all widgets returned
          //   error:') console.log(error)
          res.status(500).send({errMsg: 'find all widgets failure!'})
        })
  });

  // findById
  app.get('/api/widget/:widgetId', function(req, res) {
    var widgetId = req.params.widgetId;

    widgetModel.findWidgetById(widgetId).then(
        function(widget) {
          res.send(widget)
        },
        function(error) {
          res.status(500).send({errMsg: 'find widget failure!'})
        })
  });

  // update
  app.put('/api/widget/:widgetId', function(req, res) {
    // console.log('widget server get update')
    var widgetId = req.params.widgetId;
    var widget = req.body;

    widgetModel.updateWidget(widgetId, widget)
        .then(
            function(promise) {
              //   console.log('widget service sending update results')
              res.send(promise)
            },
            function(error) {
              res.status(500).send({errMsg: 'update widget failure!'})
            })
  });

  // delete
  app.delete('/api/widget/:widgetId', function(req, res) {
    // console.log('widget server get delete')
    var widgetId = req.params.widgetId;
    widgetModel.deleteWidget(widgetId).then(
        function(widgetId) {
          //   console.log('widget service sending delete results')
          res.send()
        },
        function(error) {
          res.status(500).send()
        })
  });

  app.put('/api/page/:pageId/widget/:widgetId', function(req, res) {
    console.log('widget server get reorder')
    var pageId = req.params.pageId;
    var widgetId = req.params.widgetId;
    widgetModel.reorderWidget(pageId, widgetId)
        .then(
            function(widgetIds) {
            //   console.log('widget service sending reordered ids:' + widgetIds)
              if (widgetIds.length === 0) {
                // console.log('widget service sending reorder empty results')
                res.send([])
              }
              widgetArray = [];
              visited = 0;
              for (var i = 0; i < widgetIds.length; i++) {
                (function(i) {
                  widgetModel.findWidgetById(widgetIds[i])
                      .exec(function(err, o) {
                        visited++;
                        if (o != null) {
                          widgetArray[i] = o;
                        }
                        if (visited === widgetIds.length) {
                        //   console.log('widget service sending reoder results')
                        //   console.log(widgetArray)
                          res.send(widgetArray)
                        }
                      })
                })(i)
              }
            },
            function(error) {
              console.log('widget service sending reoder results')
              console.log(error)
              res.status(500).send({errMsg: 'reorder error!'})
            })
  })
}