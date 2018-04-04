let WebsiteModel = require('../website/website.model.server');
let mongoose = require('mongoose')
let pageSchema = require('./page.schema.server')
var pageModel = mongoose.model('page', pageSchema)

exports.createPage = function(websiteId, page) {
  page._website = websiteId
  var newPage = new pageModel(page)
  WebsiteModel.findWebsiteById(websiteId)
      .then(function(doc) {
        doc.pages.push(newPage._id)
        return doc
      })
      .then(function(doc) {
        return WebsiteModel.updateWebsite(websiteId, doc)
      })
  return newPage.save()
};

exports.findPageById = function(pageId) {
  return pageModel.findOne({_id: pageId})
};

exports.findAllPagesForWebsite = function(websiteId) {
  return pageModel.find({_website: websiteId})
};

exports.updatePage = function(pageId, page) {
  return pageModel.update({_id: pageId}, page)
};

exports.deletePage = function(pageId) {
  return pageModel.remove({_id: pageId})
};