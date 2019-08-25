const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

//define new schema for comments
const commentSchema = new Schema({
  rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true
  },
  comment: {
      type: String,
      required: true
  },
  author: {
    type: String,
    required: true
  }
},{
  timestamps: true
});

//required: every document will have name as required field
const bandSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  genre: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  price: {
    type: Currency,
    required: true,
    min: 0
  },
  featured: {
    type: Boolean,
    default: false
  },
  comments: [ commentSchema ]   //comment documents become subdocuments inside dish document
},{
    timestamps: true
});
//every dish document can have multiple comments stored within an array

const Bands = mongoose.model('Band', bandSchema);
module.exports = Bands;