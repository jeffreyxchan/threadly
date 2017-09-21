const express = require('express')
const commentRouter = express.Router()
const Comment = require('../db').Comment

commentRouter.get('/', (req, res) => {
  res.render('index')
})

commentRouter.get('/comments', (req, res) => {
  Comment.find((err, comments) => {
    res.json(comments)
  })
})

commentRouter.post('/comments/:comment', (req, res) => {
  let message = new Comment({
    comment: req.params.comment
  })
  message.save()

  res.json({ message: 'post request received' })
})

commentRouter.post('/comments/delete/:comment', (req, res) => {
  let text = req.params.comment

  Comment.remove({ comment: text }, (err, comment) => {
    res.json({ message: 'deleted' })
  })
})

module.exports = commentRouter
