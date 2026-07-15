// pages/orders/orders.js
Page({
  data:{
    active: 0,
    nopay: [],
    payed: [],
    send: [],
    cancel: []
  },
  onLoad(){
    this.getOrderData()
  },
  onShow(){
    this.getOrderData()
  },
  onChange(e){
    this.setData({
      active: e.detail.name
    })
  },
  getOrderData(){
    // 只读取购物车结算生成的订单，无任何写死数据
    let allOrderList = getApp().globalData.allOrder || []
    this.setData({
      nopay: allOrderList.filter(item => item.status === 0),
      payed: allOrderList.filter(item => item.status === 1),
      send: allOrderList.filter(item => item.status === 2),
      cancel: allOrderList.filter(item => item.status === 3)
    })
  }
})