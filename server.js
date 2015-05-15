var express = require('express')
var jade = require('jade')
var app = express()
var low = require('lowdb')
var db = low('./db.json')
var dw = low('./dw.json')
var _ = require('lodash')

app.engine('views', jade.__express)
app.set('view engine', 'jade')
app.set('views', './views/')

app.use(express.static('./static'))

app.get('/', function(req, res){
  res.redirect('dw')
})

app.get('/db', function(req, res){
  var data = db.object
  res.render('db', data)
})

app.get('/dw', function(req, res){
  var data = _.cloneDeep(dw.object)
  _.each(data.market_fact, function(item){
    item.customer = _.find(data.customers, {
      id: item.customer_id
    })
    item.region = _.find(data.regions, {
      id: item.region_id
    })
    item.product = _.find(data.products, {
      id: item.product_id
    })
    item.order_date = _.find(data.dates, {
      id: item.order_date_id
    })
    item.consign_date = _.find(data.dates, {
      id: item.consign_date_id
    })
  })
  var q = req.query
  if (q.type  === 'slice') {
    var vals = q.slice_vals.split(/, */)
    data.market_fact = _.filter(data.market_fact, function(item){
      return _.any(vals, function(v){
        return get_val(item, q.slice_key) == v  // 类型转换比较
      })
    })
  }
  data._type = q.type || ''
  data._slice_key = q.slice_key || ''
  data._slice_vals = q.slice_vals || ''
  res.render('dw', data)
})

app.listen(8115)

function get_val(o, key){
  var segs = key.split('.')
  return _.reduce(segs, function(p, seg){
    return p = p[seg]
  }, o)
}
