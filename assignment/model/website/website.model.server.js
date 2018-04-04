let UserModel = require('../user/user.model.server');
let mongoose = require('mongoose')
let websiteSchema = require('./website.schema.server')
var websiteModel = mongoose.model('website', websiteSchema)

exports.createWebsiteForUser = function(userId, website) {
  website._user = userId
  var newWebsite = new websiteModel(website)
  UserModel.findUserById(userId)
      .then(function(doc) {
        doc.websites.push(newWebsite._id)
        return doc
      })
      .then(function(doc) {
        return UserModel.updateUser(userId, doc)
      })
  return newWebsite.save()
};

exports.findWebsiteById = function(websiteId) {
  return websiteModel.findOne({_id: websiteId})
};

exports.findAllWebsitesForUser = function(userId) {
  return websiteModel.find({_user: userId})
};

exports.updateWebsite = function(websiteId, website) {
  return websiteModel.update({_id: websiteId}, website)
};

exports.deleteWebsite = function(websiteId) {
  return websiteModel.remove({_id: websiteId})
};