var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/book-club')


var userSchema = new mongoose.Schema({
    // name: String, // we think we don't need this 8/21
    username: { type: String, required: true, unique: true }, // Q for Eddie - why lowercase?
    password: { type: String, required: true },

  // we'll need some error handling for duplicate usernames and emails
})

var BookClubUser = mongoose.model('user', userSchema);

module.exports = {BookClubUser: BookClubUser}
