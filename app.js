App({
  networkError:function(api,res){
    console.log("Network fail "+api+" "+res.data.info);
  },
  serverError:function(api,res){
    console.log("server fail "+api+" "+res.data.info);
  },

  Uid:"",
  Tname:"",
  url :"http://localhost:8080",
  // url :"https://minipro.ryanalexander.cn",
  pic:"../../jpg/",
  cap_info: {
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    width: 0,
    bottom: 0
  },
  user: {
    name:"",
    avatar: "../../jpg/icon_div_2/1.jpg",
    phone:""
  },
  Eyear: [
    {name:"2016-1",css:"active"},
  ],
  Ayear: [
    {name:"2016",css:"active"},
  ],
  // 应用第一次启动触发
  onLaunch(){
    // console.log(this.cap_info.left);

    this.cap_info.left = 0.1;
    // console.log(this.cap_info.left);

    
  },
  onShow(){
    let menuButton = wx.getMenuButtonBoundingClientRect();
    this.cap_info = {
      height : menuButton.height,
      right : menuButton.right,
      left : menuButton.left,
      top : menuButton.top,
      width : menuButton.width,
      bottom : menuButton.bottom
    };

  },
  onHide(){
    // 用户没看到 也就是失去焦点 重置的时候
    console.log("onHide");
  },
  onError(err){
    // 收集用户错误信息 异步反馈回服务器
    console.log(err);
  },
  onPageNotFound(){
    console.log("First entry page not found");
    wx.navigateTo({
      url: '/pages/404/404'
    });

  }

})
