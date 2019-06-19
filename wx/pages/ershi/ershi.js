// pages/ershi/ershi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1492152690,520867329&fm=26&gp=0.jpg","https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1852782045,4071577088&fm=26&gp=0.jpg",
"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2348904955,2033665882&fm=26&gp=0.jpg"
    ],
    url:'',
    pro:true,
    products:''
  },
  jumpxiang: function (e) {

    let obj = this.data.products[e.currentTarget.dataset.id]
    console.log(obj)
    wx.navigateTo({
      url: '../baobei/baobei?img=' + obj.img + '&title=' + obj.title + '&price=' + obj.price + '&inventory=' + obj.inventory + '&sold=' + obj.sold
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  console.log(options)
  this.setData({
    url:options.path
  })
    const that = this;
    this.req(function (data) {
      console.log(data)
      that.setData({
        products: data
      })
    })
  },
  req(call) {
    wx.request({
      url: this.data.url,
      data: '',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        call(res.data)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})