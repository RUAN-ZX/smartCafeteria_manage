Page({
    data: {
      menu: [],
      cap_info:{},
      contentOpacity:0.0,
    },
   
    onLoad: function(options) {
      // 通过getOpenerEventChannel对象,对`parentPageEmit`进行监听
      const eventChannel = this.getOpenerEventChannel();
      eventChannel.on('parentPageEmit', (data) => {
        this.setData({
          menu: data.menu,
        });
      });
    },

    onReady: function () {
      this.setData({
        cap_info : getApp().cap_info,
        user : getApp().user,
        contentOpacity: 1.0
        // css 采用transition 可以不用js实现渐现
      })
    },
    backTap: function(){
      wx.navigateBack({
        delta: 1,
        complete: (res) => {console.log(res)},
      })
    }
});