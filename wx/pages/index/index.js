//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    arr:[
      {
     img:"https://img.alicdn.com/bao/uploaded/i3/367859690/O1CN012LS4LSn1UNVF8b2_!!367859690.jpg_180x180.jpg",
        title:"饰悟银饰纯银耳饰方块水晶银耳钉女睡觉不用摘的耳钉女简约防过敏",
        price:"56:00",
        inventory:"152件",
        sold:"64"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/i4/367859690/O1CN01Cr8Y8f2LS4N3JNyqU_!!367859690.jpg_180x180.jpg",
        title: "饰悟银饰纯银耳饰星星耳线女气质长款耳坠显脸瘦的耳环2019新款潮",
        price: "46:00",
        inventory: "152件",
        sold: "64"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/i4/367859690/O1CN01pcPuTB2LS4OPuu2bJ_!!367859690.jpg_180x180.jpg",
        title: "饰悟银饰纯银戒指简约复古戒指女日韩潮人学生银戒指女食指戒指女",
        price: "46:00",
        inventory: "152件",
        sold: "64"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/i4/367859690/O1CN012LS4LRMC6idKhdu_!!367859690.jpg_180x180.jpg",
        title: "饰悟银饰小猫纯银手链女小清新猫咪铃铛手链女韩版简约手链女生日",
        price: "46:00",
        inventory: "152件",
        sold: "64"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/i3/367859690/O1CN01sGZGqy2LS4OaUIHAq_!!367859690.jpg_180x180.jpg",
        title: "饰悟银饰圆环珍珠耳环女气质短款银耳钉女纯银耳饰防过敏小耳坠女",
        price: "46:00",
        inventory: "152件",
        sold: "64"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/i3/367859690/O1CN012LS4LQzST5eoSOu_!!367859690.jpg_180x180.jpg",
        title: "饰悟银饰黑色复古耳环女气质长款耳坠女会动的耳钉女纯银简约耳饰",
        price: "46:00",
        inventory: "152件",
        sold: "64"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/i3/367859690/O1CN012LS4LRwIuH8Ahy5_!!367859690.jpg_180x180.jpg",
        title: "【特价】银项链女锁骨链纯银简约小珍珠吊坠首饰个性淡水珍珠项链",
        price: "46:00",
        inventory: "152件",
        sold: "64"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/i3/367859690/O1CN012LS4LRemj4QvnxZ_!!367859690.jpg_180x180.jpg",
        title: "饰悟925纯银星星月亮小众锁骨链韩版个性简约气质项链女潮网红",
        price: "46:00",
        inventory: "152件",
        sold: "64"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/i3/367859690/TB1V6G9BByWBuNkSmFPXXXguVXa_!!0-item_pic.jpg_180x180.jpg",
        title: "饰悟几何轻奢项链小众锁骨链女纯银项链女潮网红ins嘻哈项链土酷",
        price: "46:00",
        inventory: "152件",
        sold: "64"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/i4/367859690/O1CN012LS4LR54I9LLzdq_!!367859690.jpg_180x180.jpg",
        title: "[饰悟]925纯银星星月亮项链女ins吊坠简约choker小众锁骨链网红",
        price: "46:00",
        inventory: "152件",
        sold: "64"
      }
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  jump(e){
    let i = e.currentTarget.id
    wx.navigateTo({
      url: '../baobei/baobei?img=' + this.data.arr[i].img + '&title=' + this.data.arr[i].title + '&price=' + this.data.arr[i].price + '&inventory=' + this.data.arr[i].inventory + '&sold=' + this.data.arr[i].sold
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
