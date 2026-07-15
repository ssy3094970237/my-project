// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: "10001",
    // 默认头像，用你原来的充值中心图片
    avatarUrl: "../../images/mine-充值中心.png"
  },

  // 页面加载时读取本地保存的头像
  onLoad(options) {
    let saveAvatar = wx.getStorageSync("userAvatar");
    if (saveAvatar) {
      this.setData({
        avatarUrl: saveAvatar
      })
    }
  },

  // 点击头像更换图片
  changeAvatar() {
    wx.chooseMedia({
      count: 1, // 只选1张图片
      mediaType: ['image'],
      sourceType: ['album', 'camera'], // 相册 + 拍照
      success: (res) => {
        // 获取选中图片临时路径
        let newImgPath = res.tempFiles[0].tempFilePath;
        // 更新页面头像
        this.setData({
          avatarUrl: newImgPath
        })
        // 存入本地缓存，下次打开页面不重置
        wx.setStorageSync("userAvatar", newImgPath);
        wx.showToast({
          title: "头像修改成功",
          icon: "success"
        })
      }
    })
  },

  // 跳转地址页面
  goaddress(){
    wx.navigateTo({
      url: '/pages/address/address',
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