const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const threadly = require('./threadly')

app = express() // intialize express app

app.set('port', (process.env.PORT || 3000))

app.use('/', express.static(path.join(__dirname, 'views/')))
app.use('/', express.static(path.join(__dirname, 'public/')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(threadly.commentRouter)

app.listen(app.get('port'), () => {
  console.log('Server started: http://localhost:' + app.get('port') + '/')
})
