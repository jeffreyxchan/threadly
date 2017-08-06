const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const threadly = require('./threadly')

app = express()

app.set('port', (process.env.PORT || 3000))

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use('/', express.static(path.join(__dirname, 'views/')))
app.use('/', express.static(path.join(__dirname, 'public/')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(threadly.commentRouter)

module.exports = app
