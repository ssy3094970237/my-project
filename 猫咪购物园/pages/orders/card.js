// pages/orders/card.js
Page({
  data: {
    nickname: "miao咪购",
    userId: "10001"
  },
  // 监听昵称输入
  inputNickname(e) {
    this.setData({
      nickname: e.detail.value
    })
  },
  // 监听ID输入
  inputUserId(e) {
    this.setData({
      userId: e.detail.value
    })
  },
  // 保存弹窗提示
  saveInfo() {
    wx.showToast({
      title: "信息保存成功",
      icon: "success"
    })
  }
})