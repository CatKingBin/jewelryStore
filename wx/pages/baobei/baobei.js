// pages/baobei/baobei.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     obj:'',
     num:1
  },
  buy(){
   this.req(
     function (data) {
       console.log(data)//TRUE
       if (data) {
         wx.showModal({
           title: '提示',
           content: '亲，支付页面正在建设中呢',
           success(res) {
             if (res.confirm) {
               console.log('用户点击确定')
             } else if (res.cancel) {
               console.log('用户点击取消')
             }
           }
         })
         
       } else {
         wx.showModal({
           title: '提示',
           content: '亲，您还未登录哦',
           success(res) {
             if (res.confirm) {
               console.log('用户点击确定')
             } else if (res.cancel) {
               console.log('用户点击取消')
             }
           }
         })
       }
     })
  },
  gouwuche(){
    wx.showToast({
      title: '成功加入购物车',
      icon: 'success',
      duration: 2000
    })
  },
  req(call) {
    var header;
    header = {
      'content-type': 'application/x-www-form-urlencoded',
      'cookie': wx.getStorageSync("sessionid")//读取cookie
    };
    wx.request({
      url: "http://localhost:9999/buy",
      data: {
        
      },
      header: header,
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
 jian(){
  //  console.log(this.data)
  this.setData({
    num:this.data.num-1
  })
 },
 add(){
   this.setData({
     num: this.data.num + 1
   })
 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      obj:options
    })
    console.log(this.data.obj)
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