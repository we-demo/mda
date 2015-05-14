var low = require('lowdb')
var db = low('./db.json')
var _ = require('lodash')
var dw = low('./dw.json')

dw.object = {}
db('customers').each(function(item){
  dw('customers').push(item)
})
db('regions').each(function(item){
  dw('regions').push(item)
})
db('products').each(function(item){
  dw('products').push(item)
})

var dw_dates = dw('dates')
var dw_market_fact = dw('market_fact')
var db_customers = db('customers')
var db_regions = db('regions')

var db_orders = db('orders')
var db_orderspec = db('orderspec')
db_orders.each(function(item){
  var order_ymd = get_ymd(item.order_date)
  var consign_ymd = get_ymd(item.consign_date)
  var order_date_id, consign_date_id
  dw_dates.push({
    id: order_date_id = get_nextid(dw_dates),
    year: order_ymd[0],
    month: order_ymd[1],
    date: order_ymd[2]
  })
  dw_dates.push({
    id: consign_date_id = get_nextid(dw_dates),
    year: consign_ymd[0],
    month: consign_ymd[1],
    date: consign_ymd[2]
  })

  var customer = db_customers.find({
    id: item.customer_id
  })
  var region = db_regions.find({
    id: customer.region_id
  })
  db_orderspec.chain().filter({
    order_id: item.id
  }).each(function(ospec){
    dw_market_fact.push({
      id: get_nextid(dw_market_fact),
      order_date_id: order_date_id,
      consign_date_id: consign_date_id,
      customer_id: item.customer_id,
      region_id: region.id,
      product_id: ospec.product_id,
      order_num: ospec.num,
      order_price: ospec.eachprice * ospec.num
    })
  }).value() // chain状态下 调用value()才真正求值
})



function get_nextid(list){
  return list.get('length')+1
}
function get_ymd(datestr){
  var date = new Date(datestr)
  return [date.getFullYear(), date.getMonth()+1, date.getDate()]
}


