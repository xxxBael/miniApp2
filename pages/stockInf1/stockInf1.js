// pages/stockInf1/stockInf1.js
Page({
  
  data: {
    stockPrice: null,
    kChartData: null,
    kChartData1: null,
    kChartData2: null,
    kChartData3: null,
    list: [{
      name: '分时'
    },
    {
      name: '日K'
    },
    {
      name: '周K'
    },
    {
      name:'月K'
    },
  ],
  currentTab: 0,
  },

  onLoad: function() {
    // 获取股票最新价格
    wx.request({
      url: 'http://hq.sinajs.cn/list=sh601006', 
      
      method: 'GET',
      success: (res) => {
        var dataString = res.data; // 获取到的数据字符串
        var dataArray = dataString.split(','); // 使用split方法将字符串分割为数组
        this.setData({
          stockName: dataArray[0],
          stockPrice: parseFloat(dataArray[3]).toFixed(2),
          stockHighest:parseFloat(dataArray[4]).toFixed(2),
          stockLowest:parseFloat(dataArray[5]).toFixed(2),
          stockOpen:parseFloat(dataArray[1]).toFixed(2),
          stockChange:parseFloat(dataArray[1]).toFixed(2),
          stockVolume:(parseFloat(dataArray[8])/10000).toFixed(1),
          stockTurnover:(parseFloat(dataArray[9])/100000000).toFixed(1),
          stockDifference:parseFloat(dataArray[1]-dataArray[2]).toFixed(2),
          stockPercent:parseFloat((dataArray[1]-dataArray[2])/dataArray[1]).toFixed(2)+'%',
          stockBuy1:parseFloat(dataArray[11]).toFixed(2),
          stockBuy2:parseFloat(dataArray[13]).toFixed(2),
          stockBuy3:parseFloat(dataArray[15]).toFixed(2),
          stockBuy4:parseFloat(dataArray[17]).toFixed(2),
          stockBuy5:parseFloat(dataArray[19]).toFixed(2),
          stockBuy11:parseFloat(dataArray[10]/10000).toFixed(2),
          stockBuy22:parseFloat(dataArray[12]/10000).toFixed(2),
          stockBuy33:parseFloat(dataArray[14]/10000).toFixed(2),
          stockBuy44:parseFloat(dataArray[16]/10000).toFixed(2),
          stockBuy55:parseFloat(dataArray[18]/10000).toFixed(2),
          stockSell1:parseFloat(dataArray[21]).toFixed(2),
          stockSell2:parseFloat(dataArray[23]).toFixed(2),
          stockSell3:parseFloat(dataArray[25]).toFixed(2),
          stockSell4:parseFloat(dataArray[27]).toFixed(2),
          stockSell5:parseFloat(dataArray[29]).toFixed(2),
          stockSell11:parseFloat(dataArray[20]/10000).toFixed(2),
          stockSell22:parseFloat(dataArray[22]/10000).toFixed(2),
          stockSell33:parseFloat(dataArray[24]/10000).toFixed(2),
          stockSell44:parseFloat(dataArray[26]/10000).toFixed(2),
          stockSell55:parseFloat(dataArray[28]/10000).toFixed(2)
        });
      }
    });

    // 获取日K线图数据
    var that = this; // 保存页面实例的引用
    wx.downloadFile({
      url: 'http://image.sinajs.cn/newchart/min/n/sh000001.gif',
      success: function(res) {
        if (res.statusCode === 200) {
          that.setData({ // 使用保存的页面实例的引用
            kChartData: res.tempFilePath // 更新视图层的日K线图数据
          });
        }
      }
    });
    wx.downloadFile({
      url: 'http://image.sinajs.cn/newchart/daily/n/sh000001.gif',
      success: function(res) {
        if (res.statusCode === 200) {
          that.setData({ // 使用保存的页面实例的引用
            kChartData1: res.tempFilePath // 更新视图层的日K线图数据
          });
        }
      }
    });
    wx.downloadFile({
      url: 'http://image.sinajs.cn/newchart/weekly/n/sh000001.gif',
      success: function(res) {
        if (res.statusCode === 200) {
          that.setData({ // 使用保存的页面实例的引用
            kChartData2: res.tempFilePath // 更新视图层的日K线图数据
          });
        }
      }
    });
    wx.downloadFile({
      url: 'http://image.sinajs.cn/newchart/monthly/n/sh000001.gif',
      success: function(res) {
        if (res.statusCode === 200) {
          that.setData({ // 使用保存的页面实例的引用
            kChartData3: res.tempFilePath // 更新视图层的日K线图数据
          });
        }
      }
    });
  },
// 点击切换
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
// 实现分享功能
onShareAppMessage: function () {
  return {
    title: '股票分享',
    path: '/pages/stockInf1/stockInf1', // 确保路径正确
    imageUrl: ''
  };
} 
});
