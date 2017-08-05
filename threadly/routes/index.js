const express = require('express')
const commentRouter = express.Router()
const Comment = require('../db').Comment

commentRouter.get('/', (req, res) => {
  res.render('index')
})

commentRouter.post('/comments', (req, res) => {
  let message = new Comment()

  let text = Object.keys(req.body)
  message.comment = text[0]

  message.save()

  res.json({message: "post request received"})
})

commentRouter.get('/comments', (req, res) => {
  Comment.find(function (err, comments) {
    res.json(comments)
  })
})

commentRouter.delete('/comments', (req, res) => {
  let text = Object.keys(req.body)[0]

  Comment.remove({
    "comment": text
  }, (err, comment) => {
    res.json({message: 'deleted'})
  })
})

module.exports = commentRouter
