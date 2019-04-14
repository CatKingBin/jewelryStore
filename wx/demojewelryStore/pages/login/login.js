// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src_list:null,
    name: "a",
    pwd: "a",
    jumpdata: false
  },
  //登陆
  formSubmit: function (e) {
    var name = e.detail.value.name; //账号
    var pwd = e.detail.value.pwd; //密码
    
    var that = this;
    // console.log(password );
    //判断账号是否为空
    if ("" == name) {
      console.log("账号不能为空")
      return;
    } else if ("" == pwd) {
      console.log("密码不能为空")
      return;
    } else {
      that.setData({
        name: name,
        pwd: pwd
      })
      this.req(function (data) {
        // console.log(data)//TRUE
        if (data) {
          that.setData({
            jumpdata: true
          })
          console.log("登录成功")
          wx.switchTab({
            url: '../index/index',})
        } else {

        }
      })

    }
  },
//ipconfig 查本机网址
  req(call) {
    wx.request({
      url: "http://192.168.7.114:9999/userlogin.do?name=" + this.data.name + "&pwd=" + this.data.pwd,
      // data: {
      //   name: this.data.username,
      //   pwd: this.data.password
      // },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'get',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        call(res.data)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // //跳主页面
  // jump: function () {
  //   console.log(this.data.jumpdata)
  //   if (this.data.jumpdata) {
  //     wx.switchTab({
  //      url: '../index/index',
  //       success: function (res) {

  //       },
  //       fail: function (res) {

  //       },
  //       complete: function (res) {

  //       },
  //     })
  //   }

  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (decodeURIComponent(options.name)==undefined){
      this.setData({
        name: decodeURIComponent(options.name),
        pwd: decodeURIComponent(options.pwd) 
      });
    }
      console.log(this.data.src_list)
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