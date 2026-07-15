// pages/address/addAddress/addAddress.js
Page({

  /*页面的初始数据*/
  data: {
    region: [],// 选中的数据
  },
 
  //省市县内容选择，点击确认实现
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
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

  inputRegion: function(e) {
    this.setData({
      region: e.detail.value
    });
  },

  inputDetail: function(e) {
    this.setData({
      detail: e.detail.value
    });
  },

  saveAddress: function() {
    // 获取输入的地址信息
    let address = {
      name: this.data.name,
      phone: this.data.phone,
      region: this.data.region,
      detail: this.data.detail
    };
    //获取原有的数据地址列表
    let addresses = wx.getStorageSync('addresses') || [];
    addresses.push(address);//将新添加的数据保存到地址列表中
    wx.setStorageSync('addresses', addresses);//将添加完的数据以及原有的数据重新保存到缓存库中
    //弹出保存成功的信息
    wx.showToast({
      title: '保存成功',
      icon: 'success',
      duration: 2000
    });
    //跳转到地址列表页面
    wx.navigateTo({
      url: '../../address/address',
    })
  },

  /*生命周期函数--监听页面加载*/
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