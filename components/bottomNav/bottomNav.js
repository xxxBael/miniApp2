Component({
  properties: {
    selected: {
      type: Number,
      value: 0
    }
  },
  data: {},
  methods: {
    navigateTo(e) {
      const index = e.currentTarget.dataset.index;
      this.setData({
        selected: index
      });

      if (index === 2) {
        // 触发分享事件
        this.triggerEvent('share');
      } else {
        const url = e.currentTarget.dataset.url;
        wx.navigateTo({
          url: url
        });
      }
    }
  }
});
