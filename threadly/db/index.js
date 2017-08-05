const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/comments')

module.exports = {
  Comment: require('./Comment.js')
}
