// pages/login/login.js
Page({
  data: {
    phone: '',
    code: '',
    buttonDisabled: true,
    buttonColor: '#999',
  },

  // 手机号输入
  inputPhone(event) {
    this.setData({
      phone: event.detail.value,
    });
    this.checkInput();
  },

  // 验证码输入
  inputCode(event) {
    this.setData({
      code: event.detail.value,
    });
    this.checkInput();
  },

  // 检查输入是否完整
  checkInput() {
    const { phone, code } = this.data;
    if (phone.length > 0 && code.length > 0) {
      this.setData({
        buttonDisabled: false,
        buttonColor: '#f00',
      });
    } else {
      this.setData({
        buttonDisabled: true,
        buttonColor: '#999',
      });
    }
  },

  // 登录按钮点击
  onLogin() {
    if (!this.data.buttonDisabled) {
      wx.navigateTo({
        url: '/pages/index/index',
      });
    }
  },
});
