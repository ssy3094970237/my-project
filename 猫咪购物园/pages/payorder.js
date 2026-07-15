// pages/payorder/payorder.js
Page({
  data:{
    price: 0
  },
  onLoad(options){
    // 接收购物车传过来的价格
    this.setData({
      price: options.price
    })
  },
  // 模拟支付，支付成功跳订单列表
  submitPay(){
    wx.showLoading({title:"支付中..."})
    setTimeout(()=>{
      wx.hideLoading()
      wx.showToast({title:"支付成功"})
      // 支付成功后清空购物车，跳转到我的订单
      wx.navigateTo({
        url: "/pages/orders/orders"
      })
    },1200)
  }
})