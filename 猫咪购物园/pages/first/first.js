// pages/first/first.js
Page({
  /*页面的初始数据*/
  data: {
    swiper_image:['../../images/first-滚动2.jpg','../../images/first-滚动1.jpg','../../images/first-滚动3.jpg']
  },
  //预约参观
  goVisit:function(){
    wx.navigateTo({
      url: '../first/visit/visit',
    })
  },
  // 收货地址
  goAddress:function(){
    wx.navigateTo({
      url: '../address/address',
    })
  },
  // 商品选购
  goShopping:function(){
    wx.switchTab({
      url: '../goods/goods',
    })
  },
  //我的订单
  goOrders:function(){
    wx.navigateTo({
      url: '/pages/orders/orders',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})