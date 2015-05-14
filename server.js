var express = require('express')
var jade = require('jade')
var app = express()
var low = require('lowdb')
var db = low('./db.json')
var dw = low('./dw.json')

app.engine('views', jade.__express)
app.set('view engine', 'jade')
app.set('views', './views/')

app.use(express.static('./static'))

app.get('/', function(req, res){
  res.redirect('dw')
})

app.get('/db', function(req, res){
  var data = db.object // 直接访问对象
  res.render('db', data)
})

app.get('/dw', function(req, res){
  var data = dw.object // 直接访问对象
  res.render('dw', data)
})

app.listen(8115)
