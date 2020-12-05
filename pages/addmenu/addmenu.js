Page({
    data: {
      menu: [],
      cap_info:{},
      contentOpacity:0.0,
    },
   
    onLoad: function(options) {
      
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
    },
    addTap:function(){
      wx.showActionSheet({
        itemList: ['从相册中选择', '直接拍照'],
        success: function(res) {
          console.log(res.tapIndex)
        },
        fail: function(res) {
          console.log(res.errMsg)
        }
      })
    }
});