// pages/goods/expend/expend.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 商品详情数据
    detailData: {}
  },
  /*生命周期函数--监听页面加载*/
  onLoad: function(options) {
    // 获取上个页面传递过来的商品信息
    const detailData = JSON.parse(options.detailData);
    // console.log(detailData)
    this.setData({
      detailData: detailData
    });
  },
  // 添加到购物车
  goCar:function(){
    const goods = this.data.detailData
    // console.log(goods)
    app.globalData.goodsData.push(goods)
    wx.showToast({
      title: '已添加至购物车',
      icon: 'success',
      duration: 2000
    });
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