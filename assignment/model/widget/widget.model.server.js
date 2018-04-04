let mongoose = require('mongoose')
let PageModel = require('../page/page.model.server')
let widgetSchema = require('./widget.schema.server')
var widgetModel = mongoose.model('widget', widgetSchema)

exports.createWidget = function(pageId, widget) {
  //   console.log('widget model create ')
  widget._page = pageId
  var newWidget = new widgetModel(widget)
  //   console.log('widget model newWidget: ')
  //   console.log(newWidget)
  PageModel.findPageById(pageId).then(function(page) {
    // console.log('widget model found page: ')
    // console.log(page)
    page.widgets.push(newWidget._id)
    // console.log(page)
    page.save(function(err) {
      if (err) {
        console.log(err)
      }
    })
  })
  return newWidget.save()
};

exports.findWidgetById = function(widgetId) {
  return widgetModel.findOne({_id: widgetId})
};

exports.findAllWidgetsForPage = function(pageId) {
  return PageModel.findPageById({_id: pageId}).then(page => page.widgets)
};

exports.updateWidget = function(widgetId, widget) {
  return widgetModel.update({_id: widgetId}, widget)
};

exports.deleteWidget = function(widgetId) {
  return this.findWidgetById(widgetId)
      .then(widget => PageModel.findPageById(widget._page))
      .then(page => {
        page.widgets.pull(widgetId);
        PageModel.updatePage(page._id, page).exec()
        widgetModel.remove({_id: widgetId})
        return widgetId
      })
  //   widgetModel.findOne({_id: widgetId}).then(function(widget) {
  //     PageModel.findPageById(widget._page).then(function(page) {
  //       page.widgets.pull(widgetId)
  //       PageModel.updatePage(page._id, page)
  //     })
  //   })
  //   return widgetModel.remove({_id: widgetId})
};

exports.reorderWidget = function(pageId, widgetId) {
  return PageModel.findPageById(pageId).then(function(page) {
    // console.log('before')
    // console.log(page.widgets)
    tmp = lastToFirst(page.widgets, widgetId)
    page.widgets = tmp
    // console.log('after')
    // console.log(page.widgets)
    PageModel.updatePage(page._id, page).exec()
    return page.widgets
  })
};

function lastToFirst(array, target_id) {
  newArray = [];
  flag = 1;
  for (var i = 0; i < array.length; i++) {
    var toput;
    if (array[i] == target_id.toString()) {
      toput = 0;
      flag = 0;
    } else {
      toput = i + flag;
    }
    newArray[toput] = array[i];
  }
  return newArray
}