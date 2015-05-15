var low = require('lowdb')
var db = low('./db.json')
var _ = require('lodash')

var data_customers = [
  {
    id: 1,
    name: '林亮',
    address: '北区宿舍 16-308',
    region_id: 1
  },
  {
    id: 2,
    name: '何国辉',
    address: '黎耀球楼 3楼',
    region_id: 2
  },
  {
    id: 3,
    name: '刘兴林',
    address: '黎耀球楼 2楼',
    region_id: 2
  }
]
var data_regions = [
  {
    id: 1,
    name: '北区宿舍'
  },
  {
    id: 2,
    name: '黎耀球楼'
  }
]
var data_products = [
  {
    id: 1,
    name: '电脑'
  },
  {
    id: 2,
    name: '手机'
  }
]
var data_orders = [
  {
    id: 1,
    customer_id: 1,
    order_date: '2015-05-11',
    consign_date: '2015-05-13',
    totalprice: 1000
  },
  {
    id: 2,
    customer_id: 2,
    order_date: '2015-05-14',
    consign_date: '2015-05-15',
    totalprice: 3000
  },
  {
    id: 3,
    customer_id: 3,
    order_date: '2015-05-15',
    consign_date: '2015-05-15',
    totalprice: 2000
  },
  {
    id: 4,
    customer_id: 2,
    order_date: '2015-05-15',
    consign_date: '2015-05-16',
    totalprice: 4000
  }
]
var data_orderspec = [
  {
    id: 1,
    order_id: 1,
    product_id: 1,
    eachprice: 1000,
    num: 1
  },
  {
    id: 2,
    order_id: 2,
    product_id: 2,
    eachprice: 3000,
    num: 1
  },
  {
    id: 3,
    order_id: 3,
    product_id: 1,
    eachprice: 1000,
    num: 2
  },
  {
    id: 4,
    order_id: 4,
    product_id: 1,
    eachprice: 1000,
    num: 1
  },
  {
    id: 5,
    order_id: 4,
    product_id: 2,
    eachprice: 3000,
    num: 1
  }
]

db.object = {}
var db_customers = db('customers')
_.each(data_customers, function(item){
  db_customers.push(item)
})
var db_regions = db('regions')
_.each(data_regions, function(item){
  db_regions.push(item)
})
var db_products = db('products')
_.each(data_products, function(item){
  db_products.push(item)
})
var db_orders = db('orders')
_.each(data_orders, function(item){
  db_orders.push(item)
})
var db_orderspec = db('orderspec')
_.each(data_orderspec, function(item){
  db_orderspec.push(item)
})
