Page({
    data: {
        
        hide:{
            choice_1:"choice_hide",
        },
        cap_info:{},
        combobox:{},
        a:{
            alabel:"2018-2019 教学业绩考核",
            accident:"未", //已出现教学事故
            info:"S3总分100分封顶，S4总分100分封顶", // 备注
            aitem:[
                {
                    icon:"icon-shuohuaqipao",
                    name:"考核等级",
                    value:"A"
                },
                {
                    icon:"icon-shuohuaqipao",
                    name:"教学学时",
                    value:"100"
                },
                {
                    icon:"icon-shuohuaqipao",
                    name:"考核分数",
                    value:"100"
                }
            ] 
        },
        opacity_shield:0,
        z_shield:0,
        scrollEnable:"relative",
    },
    shield:function(e) {
        let type = parseInt(e.currentTarget.dataset.type);
        
        this.setData({'hide.choice_1':"choice_hide"}); 

        this.setData({
            opacity_shield:0,
            z_shield:0,
            scrollEnable:"relative"
        });
    },
    filter:function(e){
        
        let _combobox = this.data.combobox;
        let last_index = this.data.combobox.last_index;
        let choice = parseInt(e.currentTarget.dataset.choice);
        
        _combobox.child[last_index].css = "";
        _combobox.child[choice].css="active";
        _combobox.name = _combobox.child[last_index].name;

        _combobox.last_index = choice;
        this.setData({
            combobox : _combobox
        });
        this.choiceChange_1();
        // get data
    },
    choiceChange_1:function () {
        // console.log("change_1",this.data.hide.filter,this.data.hide.choice_1,this.data.hide.choice_2,this.data.hide.choice_3);
        if(this.data.hide.choice_1=="choice_hide"){
            this.setData({
                opacity_shield:0.2,
                z_shield:3,
                scrollEnable:"fixed"
            });

            this.setData({"hide.choice_1":""});
        } 
        else if(this.data.hide.choice_1==""){
            this.setData({"hide.choice_1":"choice_hide"});
            this.setData({
                opacity_shield:0,
                z_shield:0,
                scrollEnable:"relative"
            });
        } 
    },
    onLoad: function () {
    let _this = this;
      let _combobox = {
        last_index: 0,
        name: "",
        child: getApp().Ayear
      };
      let index = _combobox.last_index;
      _combobox.name = _combobox.child[index].name;
      _combobox.child[index].css = "active";

    //   console.log("Tid"+getApp().Tid)
    //   console.log("year"+_combobox.child[index].name)
      wx.request({
        method:'post',
        url: getApp().url+"/AGetOne", //仅为示例，并非真实的接口地址
        data: {
          "ATid": getApp().Tid,
          "year": _combobox.child[index].name,
          "access": wx.getStorageSync('a')
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
            if(res.data.code==0){    
                var temp = res.data.info;
                _this.setData({
                a:{
                    alabel: temp.Atime+"-"+(temp.Atime+1)+" 教学业绩考核",
                    accident: temp=="否"?"有":"未", //已出现教学事故
                    info: temp.Ainfo,
                    aitem:[
                    {
                        icon:"icon-shuohuaqipao",
                        name:"考核等级",
                        value: temp.Agrade
                    },
                    {
                        icon:"icon-shuohuaqipao",
                        name:"教学学时",
                        value: temp.Ahour
                    },
                    {
                        icon:"icon-shuohuaqipao",
                        name:"考核分数",
                        value: temp.Ascore
                    }
                    ]
                    }
                })
            }
            // console.log(res.data.info);
        }
      })

      this.setData({
          cap_info : getApp().cap_info,
          combobox:_combobox
        });

        this.animation = wx.createAnimation();
    },
    
})