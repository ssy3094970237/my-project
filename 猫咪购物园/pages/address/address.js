// pages/address/address.js
const app = getApp()
Page({
  /*页面的初始数据*/
  data: {
    addresses: [],
  },

  /*生命周期函数--监听页面加载*/
  onLoad(options) {
    let addresses = wx.getStorageSync('addresses') || [];
    this.setData({
      addresses: addresses
    });
  },

  /* 跳转到添加页面 */
  onadd:function(){
    wx.navigateTo({
      url: '../address/addAddress/addAddress',
    })
  },

  /* 删除地址 */
  ondelete: function(e) {
    let index = e.currentTarget.dataset.index; // 获取点击的地址项索引
    let addresses = this.data.addresses;
    addresses.splice(index, 1); // 删除对应索引的地址数据
    this.setData({
      addresses: addresses
    });
    wx.setStorageSync('addresses', addresses); // 重新保存更新后的地址数据
    wx.showToast({
      title: '删除成功',
      icon: 'success',
      duration: 2000
    });
  },

  /* 跳转到修改页面 */
  onedit: function (e) {
    const index = e.currentTarget.dataset.index; // 获取点击的地址索引
    const address = this.data.addresses[index]; // 根据索引获取地址数据
    
    // 将需要修改的地址数据存储到缓存中
    wx.setStorageSync('selectedAddress', address);
    // 跳转到修改地址页面
    wx.navigateTo({
      url: '/pages/address/editAddress/editAddress'
    });
  },

  /*返回上一页*/
  goBack: function() {
    wx.switchTab({
      url: '../../pages/first/first',
    })
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /*生命周期函数--监听页面显示*/
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