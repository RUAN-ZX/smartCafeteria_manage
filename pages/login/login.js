// pages/login/login.js
Page({
    data: {
      Uid:"",
      Tpwd:"",
      hint:"",
      login:{
        user:"请输入您的手机号",
        psw:"请输入您的短信验证码",
        captcha:"获取验证码",
        

        // hint:"职工号错误",
      },
      
      user_psw: [
          {
            "src": "icon-fukuan",
            "text": "用户",
          },
          {
            "src": "icon-shuohuaqipao",
            "text": "密码",
          },
      ]
    },

    UidInput:function (e) {
      this.setData({
        Uid: e.detail.value
      });
    },
    UpwdInput:function (e) {
      this.setData({
        Tpwd: e.detail.value
      });
    },
    setHint:function (hint_) {
      this.setData({
        hint: hint_
      }); 
    },
    
    login: function(){
      var this_ = this;
      if(this.data.Uid==""){
        this_.setHint("您的手机号似乎没输入:)")
      }
      else if(this.data.Tpwd==""){
        this_.setHint("您的验证码似乎没输入:)")
      }
      else {
        
      //   wx.request({
      //     method:'post',
      //     url: getApp().url+"/loginBypwd", 
      //     data: {
      //       "Uid": this.data.Uid,
      //       "Tpwd": this.data.Tpwd
      //     },
      //     header: {
      //         'content-type': 'application/x-www-form-urlencoded'
      //     },
      //     success: function(res) {
      //       if(res.data.code==0){
      //         try {
                
      //           wx.setStorageSync('a', res.data.info.a)
      //           wx.setStorageSync('r', res.data.info.r)
      //           wx.setStorageSync('i', this_.data.Uid)
      //           // wx.setStorage({key:'a', data:res.data.info.a})
      //           // wx.setStorage({key:'r', data:res.data.info.r})
      //           // wx.setStorage({key:'i', data:this_.data.Uid})

      //           getApp().Uid=this_.data.Uid;
      //           getApp().Tname=res.data.info.Tname;
      //           this_.setData({
      //             Tpwd: "小伙子想看密码？"
      //           });
      //           
      //         } catch (e) { console.log(e);}
              
      //       }
      //       else this_.setHint(res.data.info)
      //     }
      //   })
      wx.switchTab({
        url: '/pages/tab_index/index'
      });
    }
    },
    getCaptcha: function(){
      var this_ = this;
      if(this.data.Uid){
        this_.setHint("短信验证码已发送 5分钟内有效");
        // wx.request({
        //   method:'post',
        //   url: getApp().url+"/getCaptcha", //仅为示例，并非真实的接口地址
        //   data: {
        //     "Uid": this.data.Uid
        //   },
        //   header: {
        //       'content-type': 'application/x-www-form-urlencoded'
        //   },
        //   success: function(res) {
        //     this_.setHint(res.data.info);
        //   }
        // })
      }
      else this.setHint("您的手机号似乎没输入:)");
      
    },
    login_action: function (Uid,res) {
      
    },
    onLoad: function (options) {
      var this_ = this;
      var i = wx.getStorageSync('i');
      var a = wx.getStorageSync('a');
      var r = wx.getStorageSync('r');
      // console.log("1");
      if(a!=""&&i!=""){
        // console.log("2");
        wx.request({
          method:'post',
          url: getApp().url+"/loginByaccess", //仅为示例，并非真实的接口地址
          data: {
            "Uid": i,
            "access": a
          },
          header: {
              'content-type': 'application/x-www-form-urlencoded'
          },
          success: function(res) {
            if(res.data.code==0){
              // console.log("3");
              try{
                wx.setStorageSync('a', res.data.info.a)
                wx.setStorageSync('r', res.data.info.r)
                getApp().Uid=i;
                getApp().Tname=res.data.info.Tname;
                this_.setData({
                  Tpwd: "小伙子想看密码？"
                });
                wx.switchTab({
                  url: '/pages/index/index'
                });
              }
              catch(e){console.log(e);}
              // for (var _item of res.data.info){
              //   a.push({name:"恋爱心理",css:""})
              // }
              // getApp().Eyear = a;
            }
            else{
              // console.log("4");
              wx.request({
                method:'post',
                url: getApp().url+"/refresh", //仅为示例，并非真实的接口地址
                data: {
                  "Uid": i,
                  "refresh": r
                },
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                success: function(res) {
                  if(res.data.code==0){
                    wx.setStorageSync('a', res.data.info.a)
                    wx.setStorageSync('r', res.data.info.r)
                    
                    wx.switchTab({
                      url: '/pages/index/index'
                    });
                  }
                  else{
                    // console.log("5");
                  }
                }
              })
            }
          }
        })
      }
    },
})