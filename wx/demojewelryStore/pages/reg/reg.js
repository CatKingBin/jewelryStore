// pages/reg/reg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //注册
  formSubmit: function(e) {
    var account = e.detail.value.account; //账号
    var password = e.detail.value.password; //密码
    var subPassword = e.detail.value.subPassword;　 //确认密码
    var that = this;
    console.log(password + subPassword + account);
    //判断账号是否为空
    if ("" == account) {　　
      console.log("账号不能为空")　　
      return;　　
    } else { //账号不为空

    }
    // 判断密码是否为空　
    if ("" == password) {
      console.log("密码不能为空")
      return;
    } else {
      
    }　 
    // 两个密码必须一致
    if (subPassword != password) {

      console.log("输入密码不一致");　　
      return;　　
    } else {　}
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