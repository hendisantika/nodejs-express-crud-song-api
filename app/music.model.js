var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema = new Schema({
    title: String,
    genre: String,
    singer: String,
    rating: Number
});

module.exports = mongoose.model('Song', SongSchema);