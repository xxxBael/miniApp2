// pages/scene/scene.js
Page({
  navigateToLogin() {
    wx.navigateTo({
      url: '/pages/login/login',
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    stocks: [
      {code: '300549', name: '磷贝德', price: 13.75, change: '+11.25%',isUp: true},
      {code: '300921', name: '天利科技', price: 23.34, change: '+3.95%',isUp: true},
      {code: '300246', name: '瑞玛精密', price: 8.77, change: '+5.935%',isUp: true},
      {code: '300345', name: '恒锋信息', price: 4.62, change: '+19.95%',isUp: true},
      {code: '300197', name: '米哈游科技', price: 5.32, change: '-10.15%',isUp: false},
      // 添加更多股票信息...
    ],
 
    time: '',
    list: [{
      name: '涨幅榜'
    },
    {
      name: '跌幅榜'
    },
    {
      name: '成交额'
    },
    {
      name: '涨速榜'
    },
  ],
  currentTab: 0,
  stocks: [
    {code: '300525', name: '佰维存储', price: 44.92, change: '+20.01%',isUp: true},
    {code: '300284', name: '苏交科', price: 29.62, change: '+19.95%',isUp: true},
    {code: '300454', name: '因赛集团', price: 14.37, change: '+10.89%',isUp: true},
    {code: '300821', name: '同有科技', price: 21.85, change: '-10.31%',isUp: false},
    {code: '300131', name: '康平科技', price: 38.71, change: '+9.96%',isUp: true},
    {code: '300672', name: '兆日科技', price: 17.79, change: '+5.23%',isUp: true},
    {code: '300781', name: '浸膜科技', price: 18.67, change: '-12.56%',isUp: false},
    {code: '300549', name: '磷贝德', price: 13.75, change: '+11.25%',isUp: true},
    {code: '300921', name: '天利科技', price: 23.34, change: '+3.95%',isUp: true},
    {code: '300246', name: '瑞玛精密', price: 8.77, change: '+5.935%',isUp: true},
    {code: '300345', name: '恒锋信息', price: 4.62, change: '+19.95%',isUp: true},
    {code: '300197', name: '米哈游科技', price: 5.32, change: '-10.15%',isUp: false},
    {code: '300591', name: '哈密有科技', price: 9.83, change: '+16.15%',isUp: true},
    {code: '300524', name: '哈基米科技', price: 49.86, change: '+18.35%',isUp: true},
    {code: '300117', name: '哈游米科技', price: 11.33, change: '-10.15%',isUp: false},
    {code: '300562', name: '哈密有科技', price: 17.43, change: '+6.15%',isUp: true},
    {code: '300134', name: '哈基米科技', price: 18.26, change: '+15.35%',isUp: true},
    // ... 其他股票数据
  ]
  
  },
  switchNav: function(e) {
		var that = this;
		if (this.data.currentTab == e.currentTarget.dataset.index) {
			return false;
		} else {
			that.setData({
				currentTab: e.currentTarget.dataset.index
			});
		}
	},

	// 滑动切换
	bindChange: function(e) {
		// console.log(e)
		var that = this;
		that.setData({
			currentTab: e.detail.current
		});
	},

                      
  onLoad: function() {
    this.updateTime();
    setInterval(this.updateTime, 1000);  // 每秒更新一次时间
  },
  updateTime: function() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var weekday = ['日', '一', '二', '三', '四', '五', '六'][date.getDay()];
    this.setData({
      time: `${year}年${month}月${day}日 ${hour}:${minute}:${second} 星期${weekday}`
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
 

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

  },

  
  
})