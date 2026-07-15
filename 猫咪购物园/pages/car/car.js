// pages/car/car.js
const app = getApp();
Page({
  data: {
    cartData:[],
    exhibition:true,
    isAllCheck: false,
    totalMoney: 0
  },

  onShow() {
    var app = getApp()
    this.setData({
      cartData: app.globalData.goodsData
    });
    this.calcTotal();
  },
  
  delete: function(e) {
    let index = e.currentTarget.dataset.index;
    let delegoods = this.data.cartData;
    delegoods.splice(index, 1);
    this.setData({
      cartData: delegoods
    });
    getApp().globalData.goodsData = delegoods;
    this.calcTotal();
    wx.showToast({
      title: '移出成功',
      icon: 'fail',
      duration: 2000
    });
  },

  goGoods:function(){
    wx.switchTab({
      url: '../goods/goods',
    })
  },

  toggleAllCheck: function() {
    let allStatus = !this.data.isAllCheck;
    let goodsList = this.data.cartData;
    for (let i = 0; i < goodsList.length; i++) {
      goodsList[i].checked = allStatus;
    }
    this.setData({
      isAllCheck: allStatus,
      cartData: goodsList
    })
    this.calcTotal();
  },

  calcTotal: function() {
    let total = 0;
    let list = this.data.cartData;
    for (let i = 0; i < list.length; i++) {
      if (list[i].checked) {
        total = total + list[i].num * list[i].price;
      }
    }
    this.setData({
      totalMoney: total
    })
  },

  goPay: function() {
    let selectArr = [];
    let allCart = this.data.cartData;
    for (let i = 0; i < allCart.length; i++) {
      if (allCart[i].checked) {
        selectArr.push(allCart[i]);
      }
    }
    if (selectArr.length == 0) {
      wx.showToast({
        title: "请勾选商品",
        icon: "none"
      })
      return;
    }

    if (!getApp().globalData.allOrder) {
      getApp().globalData.allOrder = [];
    }
    let orderPool = getApp().globalData.allOrder;
    for (let j = 0; j < selectArr.length; j++) {
      let item = selectArr[j];
      orderPool.push({
        id: Date.now(),
        shop: item.shop,
        name: item.name,
        desc: item.desc,
        num: item.num,
        price: item.price,
        url: item.image,
        status: 1,
        statusText: "已付款"
      })
    }
    getApp().globalData.allOrder = orderPool;

    let newCart = [];
    for (let k = 0; k < allCart.length; k++) {
      if (!allCart[k].checked) {
        newCart.push(allCart[k]);
      }
    }
    this.setData({
      cartData: newCart,
      totalMoney: 0,
      isAllCheck: false
    })
    getApp().globalData.goodsData = newCart;

    wx.showToast({
      title: "下单成功",
      icon: "success"
    })
    setTimeout(function() {
      wx.navigateTo({
        url: "/pages/orders/orders"
      })
    }, 1000)
  },

  onLoad() {},
  onReady() {},
  onHide() {},
  onUnload() {},
  onPullDownRefresh() {},
  onReachBottom() {},
  onShareAppMessage() {}
})