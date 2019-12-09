var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/*
  A genre model for storing genres (category of book, fiction/non-fiction, romance,
  history, etc).
*/

var GenreSchema = new Schema(
  {
    name: {type: String, required: true, min: 3, max: 100}
  }
);

GenreSchema.virtual('url').get(function() {
  return '/catalog/genre/' + this._id;
});

// Exports Module
module.exports = mongoose.model('Genre', GenreSchema);