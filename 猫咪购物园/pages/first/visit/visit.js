// pages/first/visit/visit.js
Page({

  /*页面的初始数据*/
  data: {
    date: '选择日期',
    time: '选择时间',
    shop:['思源楼','知行楼','通方楼','行政楼','天佑会堂','图书馆']
  },
  inputName: function(e) {
    this.setData({
      name: e.detail.value
    });
  },
  inputPhone: function(e) {
    this.setData({
      phone: e.detail.value
    });
  },
  bindShopChange: function(e) {
    let i = e.detail.value;//获得选项的数组下标
    let value = this.data.shop[i];//获得选项的值
    this.setData({shopItem:value});//将选项名称更新到WXML页面上
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },
  submitForm: function(e) {
    
    wx.showToast({
      title: '预约成功',
      icon: 'success',
      duration: 1000,
      mask: true,
      success: function() {
        setTimeout(function() {
          //要延时执行的代码
          wx.navigateBack({
             delta: 1
          })
        }, 1000) //延迟时间
      },
    });
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