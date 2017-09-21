const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const threadly = require('./threadly')

app = express()

app.set('port', process.env.PORT || 3000)

app.use('/', express.static(path.join(__dirname, 'views/')))
app.use('/', express.static(path.join(__dirname, 'public/')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Cache-Control', 'no-cache')
  next()
})

app.use(threadly.commentRouter)

module.exports = app
