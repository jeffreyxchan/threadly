const app = require('./app.js')

app.listen(app.get('port'), () => {
  console.log('Server started: http://localhost:' + app.get('port') + '/')
})
