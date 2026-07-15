// pages/goods/goods.js
const app = getApp
Page({
  /*页面的初始数据*/
  data: {
    // 商品列表数据
    food: [
      {
        id: 1,
        name: "猫粮1",
        price: "10",
        num:'1',
        desc:'富含大量营养物质',
        image: "/images/shopping-猫粮1.png",
        shop:'小猫爱吃鱼',
        bao:'假一赔四 退货运费险 七天无理由退货'
      },
      {
        id: 2,
        name: "猫粮2",
        price: "12",
        num:'1',
        desc:'本款产品包含',
        image: "/images/shopping-猫粮2.png",
        shop:'爱心宠物店',
        bao:'假一赔四 退货运费险 七天无理由退货'
      },
      {
        id: 3,
        name: "猫粮3",
        price: "12.8",
        num:'1',
        desc:'富含大量营养物质',
        image: "/images/shopping-猫粮3.png",
        shop:'蜡笔小新宠物店',
        bao:'假一赔四 退货运费险 七天无理由退货'
      },
      {
        id: 4,
        name: "猫粮4",
        price: "12",
        num:'1',
        desc:'富含大量营养物质',
        image: "/images/shopping-猫粮4.png",
        shop:'亮亮宠物专卖店',
        bao:'假一赔四 退货运费险 七天无理由退货'
      },
      {
        id: 5,
        name: "猫粮5",
        price: "12",
        num:'1',
        desc:'富含大量营养物质',
        image: "../../images/shopping-猫粮5.png",
        shop:'小猫爱吃鱼',
        bao:'假一赔四 退货运费险 七天无理由退货'
      }
    ],
    can: [
      {
        id: 1,
        name: "羊奶鸡肉罐",
        price: "10",
        num:'1',
        desc:'富含大量营养物质',
        image: "/images/shopping-罐头1.png",
        shop:'小猫爱吃鱼',
        bao:'假一赔四 退货运费险 七天无理由退货'
      },
      {
        id: 2,
        name: "金枪鱼胡萝卜",
        price: "12",
        num:'1',
        desc:'本款产品包含',
        image: "/images/shopping-罐头3.png",
        shop:'爱心宠物店',
        bao:'极速退款 退货运费险 七天无理由退货'
      },
      {
        id: 3,
        name: "鸡丝虾仁",
        price: "12.8",
        num:'1',
        desc:'富含大量营养物质',
        image: "/images/shopping-罐头4.png",
        shop:'蜡笔小新宠物店',
        bao:'假一赔四 退货运费险 七天无理由退货'
      },
      {
        id: 4,
        name: "金枪鱼牛肉罐",
        price: "12",
        num:'1',
        desc:'富含大量营养物质',
        image: "/images/shopping-罐头5.png",
        shop:'亮亮宠物专卖店',
        bao:'假一赔四 退货运费险 七天无理由退货'
      },
      {
        id: 5,
        name: "浓汤鸡肉罐",
        price: "12",
        num:'1',
        desc:'富含大量营养物质',
        image: "../../images/shopping-罐头2.png",
        shop:'小猫爱吃鱼',
        bao:'假一赔四 退货运费险 七天无理由退货'
      }
    ],
    snacks: [
      {
        id: 1,
        name: "小鱼干",
        price: "10",
        num:'1',
        desc:'富含大量营养物质',
        image: "/images/shopping-零食1.png",
        shop:'小猫爱吃鱼',
        bao:'极速退款 退货运费险 七天无理由退货'
      },
      {
        id: 2,
        name: "鸡肉磨牙棒",
        price: "12",
        num:'1',
        desc:'本款产品包含',
        image: "/images/shopping-零食2.png",
        shop:'爱心宠物店',
        bao:'极速退款 退货运费险 七天无理由退货'
      },
      {
        id: 3,
        name: "磨牙棒",
        price: "12.8",
        num:'1',
        desc:'富含大量营养物质',
        image: "/images/shopping-零食3.png",
        shop:'蜡笔小新宠物店',
        bao:'退货运费险 七天无理由退货'
      },
      {
        id: 4,
        name: "狗狗磨牙棒",
        price: "12",
        num:'1',
        desc:'富含大量营养物质',
        image: "/images/shopping-零食4.png",
        shop:'亮亮宠物专卖店',
        bao:'假一赔四 退货运费险 七天无理由退货'
      }
    ],
    play: [
      {
        id: 1,
        name: "猫抓球",
        price: "10",
        num:'1',
        desc:'富含大量营养物质',
        image: "/images/shopping-玩具1.png",
        shop:'小猫爱吃鱼',
        bao:'极速退款 退货运费险 七天无理由退货'
      },
      {
        id: 2,
        name: "哆啦A梦逗猫棒",
        price: "12",
        num:'1',
        desc:'本款产品包含',
        image: "/images/shopping-玩具2.png",
        shop:'爱心宠物店',
        bao:'极速退款 退货运费险'
      },
      {
        id: 3,
        name: "仙人掌逗猫棒",
        price: "12.8",
        num:'1',
        desc:'富含大量营养物质',
        image: "/images/shopping-玩具3.png",
        shop:'蜡笔小新宠物店',
        bao:'退货运费险 七天无理由退货'
      },
      {
        id: 4,
        name: "逗猫棒",
        price: "12",
        num:'1',
        desc:'富含大量营养物质',
        image: "/images/shopping-玩具4.png",
        shop:'亮亮宠物专卖店',
        bao:'极速退款 七天无理由退货'
      },
      {
        id: 5,
        name: "玩具沙发",
        price: "12",
        num:'1',
        desc:'富含大量营养物质',
        image: "../../images/shopping-玩具5.png",
        shop:'小猫爱吃鱼',
        bao:'假一赔四 退货运费险 七天无理由退货'
      }
    ],
    active:0,
    currentTab:0
  },
    switch: function (e) {
      var page = this;
      var id = e.target.id;
      if (this.data.currentTab == id) {
        return false;
      } else {
        page.setData({
          currentTab: id
        });
      }
      page.setData({
        active: id
      });
    },
  
  goToDetail: function(e) {
    const detailData = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: '../goods/expend/expend?detailData=' + JSON.stringify(detailData)
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