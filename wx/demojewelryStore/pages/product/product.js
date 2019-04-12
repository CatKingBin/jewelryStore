// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bar: ['综合',
      '销量',
      '新品',
      '价格'
    ],
    pro: true,
    activea: 1,
    activeb: 0,
    activec: 0,
    actived: 0,
    activee: 0,
    s: "../../img/s.png",
    x: "../../img/x.png",
    xs: "../../img/xs.png",
    products: [{
        imgsrc: "http://g.search2.alicdn.com/img/bao/uploaded/i4/i2/367859690/O1CN012LS4LQ1Tbw1rhjs_!!367859690.jpg_360x360.jpg",
        title: "【饰悟】925纯银磨砂小圆球小耳钉女气质韩国个性简约睡觉不用摘",
        price: 13,
        pay: 131
      },
      {
        imgsrc: "http://g.search2.alicdn.com/img/bao/uploaded/i4/i2/367859690/O1CN012LS4LQ1Tbw1rhjs_!!367859690.jpg_360x360.jpg",
        title: "【饰悟】925纯银磨砂小圆球小耳钉女气质韩国个性简约睡觉不用摘",
        price: 458,
        pay: 22
      },
      {
        imgsrc: "http://g.search2.alicdn.com/img/bao/uploaded/i4/i2/367859690/O1CN012LS4LQ1Tbw1rhjs_!!367859690.jpg_360x360.jpg",
        title: "【饰悟】925纯银磨砂小圆球小耳钉女气质韩国个性简约睡觉不用摘",
        price: 58,
        pay: 433
      },
      {
        imgsrc: "http://g.search2.alicdn.com/img/bao/uploaded/i4/i2/367859690/O1CN012LS4LQ1Tbw1rhjs_!!367859690.jpg_360x360.jpg",
        title: "【饰悟】925纯银磨砂小圆球小耳钉女气质韩国个性简约睡觉不用摘",
        price: 78,
        pay: 1144
      },
      {
        imgsrc: "http://g.search2.alicdn.com/img/bao/uploaded/i4/i2/367859690/O1CN012LS4LQ1Tbw1rhjs_!!367859690.jpg_360x360.jpg",
        title: "【饰悟】925纯银磨砂小圆球小耳钉女气质韩国个性简约睡觉不用摘",
        price: 18,
        pay: 155
      },
    ]
  },
  // 综合
  onClicka: function() {
  
    this.setData({
      activea: 1,
      activeb: 0,
      activec: 0,
      actived: 0,
      activee: 0,
      s: "../../img/s.png",
      x: "../../img/x.png",
 
    })
  },
  // 销量
  onClickb: function() {
    this.setData({
      activea: 0,
      activeb: 1,
      activec: 0,
      actived: 0,
      activee: 0,
      s: "../../img/s.png",
      x: "../../img/x.png",
    })
    var arr = this.data.products;
   
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < i; j++) {
        if (arr[j].pay < arr[i].pay) {
          var b = arr[j];
          arr[j] = arr[i];
          arr[i] = b;
        }
      }
    }
    this.setData({
      products: arr

    })

  },
  // 新品
  onClickc: function() {
    this.setData({
      activea: 0,
      activeb: 0,
      activec: 1,
      actived: 0,
      activee: 0,
      s: "../../img/s.png",
      x: "../../img/x.png",
    })
  },
  // 价格
  onClickd: function() {
    var arr = this.data.products;

    this.setData({
      activea: 0,
      activeb: 0,
      activec: 0,
      actived: 1,
      activee: 0,

    })
    var arr = this.data.products;
    if (this.data.s === "../../img/ss.png" && this.data.x === "../../img/x.png") {

      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < i; j++) {
          if (arr[j].price > arr[i].price) {
            var b = arr[j];
            arr[j] = arr[i];
            arr[i] = b;
          }
        }
      }

      this.setData({
        s: "../../img/s.png",
        x: "../../img/xx.png",
        products: arr

      })
    } else {
      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < i; j++) {
          if (arr[j].price < arr[i].price) {
            var b = arr[j];
            arr[j] = arr[i];
            arr[i] = b;
          }
        }
      }

      this.setData({
        s: "../../img/ss.png",
        x: "../../img/x.png",
        products: arr

      })
    }
  },
  // 转换
  onClicke: function() {
    this.setData({
      activea: 0,
      activeb: 0,
      activec: 0,
      actived: 0,
      activee: 1,
      s: "../../img/s.png",
      x: "../../img/x.png",
      // xs: "../../img/xss.png",
    })
    if (this.data.xs === "../../img/xs.png") {
      this.setData({
        xs: "../../img/xss.png",
        pro: false
      })
    } else {
      this.setData({
        xs: "../../img/xs.png",
        pro: true
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
   

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})