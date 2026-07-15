// pages/address/editAddress/editAddress.js
const app = getApp()
Page({

  /*页面的初始数据*/
  data: {
    editAddress:{},
    region: [],// 选中的数据
  },

  /*生命周期函数--监听页面加载*/
  onLoad(options) {
    // 从缓存中获取需要修改的地址数据
    const editedAddress = wx.getStorageSync('selectedAddress');
    this.setData({
      editAddress: editedAddress
    });
  },

  /* 确认修改 */
  confirmEdit:function(){
    wx.showToast({
      title: '修改成功',
      icon: 'success',
      duration: 1000,
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
  //省市县内容选择，点击确认实现
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
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