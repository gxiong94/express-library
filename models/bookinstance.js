var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

/* 
  The BookInstance represents a specific copy of a book that someone
  might borrow and includes information about whether the copy is available 
  or on what data it is expected back, "imprint" or version details.
*/

var BookInstanceSchema = new Schema(
  {
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true}, // ref to the associated book
    imprint: {type: String, required: true},
    status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
    due_back: {type: Date, default: Date.now}
  }    
);

// Virtual for bookinstance's URL
BookInstanceSchema.virtual('url').get(function () {
  return '/catalog/bookinstance/' + this._id;
});

BookInstanceSchema.virtual('due_back_formatted')
  .get(function () {
    return moment(this.due_back).format('MMMM Do, YYYY');
  });

// Export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);