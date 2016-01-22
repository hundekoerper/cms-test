var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var pageSchema = new Schema({
  title: String,
  url: {type: String, index: {unique:true}},
  content: String,
  menuIndex: Number,
  date: Date
});

  var Page = mongoose.model('Page', pageSchema);

module.exports = Page;
