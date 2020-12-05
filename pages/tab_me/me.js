Page({
  data: {
    url:"",
    name:"",
    user:{},
    list_info:[
    {
        value:"",
        name:"您的工号"
    },
    {
        value:"",
        name:"您的邮箱"
    }
    ],
    list_card1: [
        { 
          src: "icon-phone",
          text: "更改手机",
        },
        {
          src: "icon-pwd",
          text: "更改密码",
        },
        {
          src: "icon-contact",
          text: "联系反馈",
        },
        {  
          src: "icon-exit",
          text: "退出登录",
        },
      
    ],   
    list_card2: [
      {
          "src": "icon-company",
          "name": "杭州丰美餐饮管理有限公司",
          "description":""
      },
      {
          "src": "icon-me",
          "name": "个性化设置",
          "description":"自己颜色风格的小程序"
      },
      {
          "src": "icon-order",
          "name": "应用介绍 ",
          "description":"这个应用的故事"
      },
      {
          "src": "icon-contact",
          "name": "关于我们",
          "description":"想知道我们的故事吗"
      },
  ]
  },

  onLoad: function (options){
    
    // console.log("234234"+email);
    var _this = this;
    wx.request({
      method:'post',
      url: getApp().url+"/getEmailById", //仅为示例，并非真实的接口地址
      data: {
        "Tid": getApp().Tid,
        "access": wx.getStorageSync('a')
      },
      header: {
          'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        if(res.data.code==0){
          let temp_list = [];
          let a = {
            value:getApp().Tid,
            name:"您的工号"
          };
          let b = {
            value: res.data.info,
            name:"您的邮箱"
          };
          temp_list.push(a);
          temp_list.push(b);

          _this.setData({
            url: getApp().url,
            user : getApp().user,
            name : getApp().Tname,
            list_info : temp_list
          });
        }
        else getApp().serverError("getEmailById",res);
        
      },
      fail:function (res) {
        getApp().networkError("getEmailById",res);
      }
    });
      
    
  
  },

  btnTap: function (res){
    switch(res.currentTarget.dataset.index) {
      case 0:{
        wx.navigateTo({
          url: '/pages/_emailChange/emailChange',
        })
        break;
      }   
      case 1:{
        wx.navigateTo({
          url: '/pages/_pwdChange/pwdChange',
          })
        break;
      }
          
      case 2:{
        wx.navigateTo({
          url: '/pages/_feedback/feedback',
        })
        break;
      }
      case 3:{
        wx.navigateTo({
          url: '/pages/login/login',
        })
        wx.setStorageSync('i', "");
        wx.setStorageSync('a', "");
        wx.setStorageSync('r', "");
        break;
      }
          
      default:{
        break;
      }
        
    }   
  },
})