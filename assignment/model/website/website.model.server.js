import { UserModel } from '../user/user.model.server';

let mongoose = require('mongoose')
let websiteSchema = require('./website.model.server')
var websiteModel = mongoose.model('website', websiteSchema)

const SUCCESS = 0;
const FAILURE = -1;

exports.createWebsiteForUser = function (userId, website) {
    // a website document: a instance of websiteModel
    var user = UserModel.findUserById(userId)
    // create subdocs by using create method of mongoosearrays
    // should have generated a webdoc from website
    user.websites.create(website)
    // calling save on the parent document triggers save() for all its subdocs
    // will return SUCCESS or FAILURE
    return UserModel.updateUser(userId, user)
}

exports.findWebsiteById = function (websiteId) {
    var ret; 
    websiteMode.find({ _id: websiteId }, function (error, docs) {
        if (error) {
            ret = ''
        } else {
            ret = docs;
        }
    })
    return ret
}

exports.findAllWebsitesForUser = function (userId) {
    var user = UserModel.findUserById(userId)
    return user.websites
}

exports.updateWebsite = function (websiteId, website) {
    var ret
    websiteMode.update({ _id: websiteId }, website, function (error, rawResponse) {
        if (error) {
            ret = FAILURE
        } else {
            ret = SUCCESS
        }
    })
    return ret
}

exports.deleteWebsite = function (websiteId) {
    var ret 
    websiteMode.remove({ _id: websiteId }, function (error) {
        if (error) {
            ret = FAILURE
        } else {
            ret = SUCCESS
        }
    })
    return ret
}