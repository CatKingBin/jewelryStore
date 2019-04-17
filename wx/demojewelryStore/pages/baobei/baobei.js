// pages/baobei/baobei.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgsrc:"",
    price:"",
    title:"",
    sold:"",
    jia:"https://i.loli.net/2019/04/15/5cb430bc445b8.png",
    jian:"https://i.loli.net/2019/04/15/5cb43012376ef.png",
    num:1,
    guige:false


  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  // 数量减
  jian:function(){
    var jian = this.data.num;
    if(jian<=2){
      this.setData({
        num:1,
        jian: "https://i.loli.net/2019/04/15/5cb43012376ef.png",
     
      })
    }else{
      jian = jian - 1;
      this.setData({
        num: jian,     
      })
    }
  },
  // 数量加
  jia: function () {
    var jia = this.data.num;
      jia=jia+1;
      this.setData({
        num:jia,
        jian: "https://i.loli.net/2019/04/15/5cb4339d2e665.png",
        
      }) 
  },
  // 规格
  guige:function(){
    this.setData({
      guige: true,
    })
  },
  // 取消
  quxiao: function () {
    this.setData({
      guige: false,
    })
  },
  
  onLoad: function (options) {
    console.log("111" +decodeURIComponent(options.img))
    this.setData({
      imgsrc: decodeURIComponent(options.img),
      price: decodeURIComponent(options.price),
      title: decodeURIComponent(options.title),
      sold: decodeURIComponent(options.sold)
      

    })
   console.log(this.data)
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