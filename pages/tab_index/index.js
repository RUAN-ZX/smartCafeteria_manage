Page({
    data: {
        hide:{
            filter:"filter_hide",
            choice_1:"choice_hide",
            choice_2:"choice_hide",
            choice_3:"choice_hide",
        },
        cap_info:{},
        combobox_last_index:[
            0,
            0,
            0,
        ],
        combobox:[
            {
                name: "项目",
                child: [
                    {name:"上交时间",css:"active"},
                    {name:"销量",css:""},
                    {name:"评分",css:""}
                ]
            },
            {
                name: "排序",
                child: [
                    {name:"升序",css:"active"},
                    {name:"降序",css:""},
                ]
            },
            {
                name: "排序",
                child: [
                    {name:"升序",css:"active"},
                    {name:"降序",css:""},
                ]
            },
            {
                name: "筛选",
                child: [
                    {
                        title:"时间段",
                        child:[
                            {name:"早餐",css:"active"},
                            {name:"中餐",css:""},
                            {name:"午餐",css:""},
                        ]
                    },
                    {
                        title:"荤素",
                        child:[
                            {name:"素菜爽口",css:"active"},
                            {name:"大口吃荤",css:""}
                        ]
                    },
                    {
                        title:"其他",
                        child:[
                            {name:"热销推荐",css:"active"},
                        ]
                    }
                ]
            },
        ],
        menu: [
            { 
              name: "[五餐] 鲜香番茄炒蛋",
              sold: "1031",
              star: "4.6",
              price: "2",
              src: "../../jpg/food/1.jpg"
            },
            { 
              name: "[五餐] 肥而不腻红烧肉",
              sold: "4733",
              star: "4.8",
              price: "7",
              src: "../../jpg/food/2.jpg"
            },
            { 
              name: "[五餐] 香爽尖椒炒肉",
              sold: "877",
              star: "4.5",
              price: "5",
              src: "../../jpg/food/3.jpg"
            },
            { 
              name: "[五餐] 经典油爆虾",
              sold: "768",
              star: "4.8",
              price: "7",
              src: "../../jpg/food/4.jpg"
            },
            { 
              name: "[五餐] 葱香芋头",
              sold: "1540",
              star: "4.9",
              price: "3",
              src: "../../jpg/food/5.jpg"
            },  
            { 
              name: "[五餐] 芝士火腿披萨",
              sold: "340",
              star: "4.9",
              price: "10",
              src: "../../jpg/food/7.jpg"
            }, 
            { 
              name: "[五餐] 薄家特色炒鸡",
              sold: "1136",
              star: "4.9",
              price: "6",
              src: "../../jpg/food/8.jpg"
            }, 
            { 
                name: "[五餐] 芝士火腿披萨",
                sold: "340",
                star: "4.9",
                price: "10",
                src: "../../jpg/food/7.jpg"
              }, 
              { 
                name: "[五餐] 薄家特色炒鸡",
                sold: "1136",
                star: "4.9",
                price: "6",
                src: "../../jpg/food/8.jpg"
              }, 
            
      
            
        ], 
       

        opacity_shield:0,
        z_shield:0,
        scrollEnable:"relative",
    },
    shield:function(e) {
        let type = parseInt(e.currentTarget.dataset.type);
        console.log(type);
        this.setData({'hide.filter':"filter_hide"});
        this.setData({"hide.choice_3":"choice_hide"});
        this.setData({"hide.choice_2":"choice_hide"});  
        this.setData({'hide.choice_1':"choice_hide"}); 

        this.setData({
            opacity_shield:0,
            z_shield:0,
            scrollEnable:"relative"
        });
    },
    filter:function(e){
        
        let temp_combobox = this.data.combobox;
        let temp_combobox_last_index = this.data.combobox_last_index;
        let choice = parseInt(e.currentTarget.dataset.choice);
        let type = parseInt(e.currentTarget.dataset.type);
        console.log(e);

        temp_combobox[type].child[this.data.combobox_last_index[type]].css = "";
        temp_combobox[type].child[choice].css="active";


        temp_combobox_last_index[type] = choice;
        this.setData({
            combobox : temp_combobox,
            combobox_last_index : temp_combobox_last_index,
        });
        // if(type==0) this.choiceChange_1();
        // else if(type==1) this.choiceChange_2();
        // else if(type==2) this.choiceChange_3();
        // else if(type==3) this.filterChange();

        // get data
    },
    filterChange:function () {
        if(this.data.hide.filter=="filter_hide") {
            this.setData({
                opacity_shield:0.2,
                z_shield:3,
                scrollEnable:"fixed"
            });
            this.setData({'hide.filter':""});
            this.setData({"hide.choice_3":"choice_hide"});
            this.setData({"hide.choice_2":"choice_hide"});  
            this.setData({'hide.choice_1':"choice_hide"});  
        }
        else if(this.data.hide.filter=="") {
            this.setData({'hide.filter':"filter_hide"});
            this.setData({
                opacity_shield:0,
                z_shield:0,
                scrollEnable:"relative"
            });
        }
    },
    choiceChange_1:function () {
        console.log("change_1",this.data.hide.filter,this.data.hide.choice_1,this.data.hide.choice_2,this.data.hide.choice_3);
        if(this.data.hide.choice_1=="choice_hide"){
            this.setData({
                opacity_shield:0.2,
                z_shield:3,
                scrollEnable:"fixed"
            });
            this.setData({"hide.filter":"filter_hide"});  
            this.setData({"hide.choice_2":"choice_hide"});  
            this.setData({"hide.choice_3":"choice_hide"});

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
    choiceChange_2:function () {
        console.log("change_1",this.data.hide.filter,this.data.hide.choice_1,this.data.hide.choice_2,this.data.hide.choice_3);

        if(this.data.hide.choice_2=="choice_hide"){
            this.setData({
                opacity_shield:0.2,
                z_shield:3,
                scrollEnable:"fixed"
            });
            this.setData({"hide.filter":"filter_hide"});  
            this.setData({"hide.choice_1":"choice_hide"});  
            this.setData({"hide.choice_3":"choice_hide"});

            this.setData({"hide.choice_2":""});
        } 
        else if(this.data.hide.choice_2==""){
            this.setData({"hide.choice_2":"choice_hide"});
            this.setData({
                opacity_shield:0,
                z_shield:0,
                scrollEnable:"relative"
            });
        }
    },
    choiceChange_3:function () {
        console.log("change_1",this.data.hide.filter,this.data.hide.choice_1,this.data.hide.choice_2,this.data.hide.choice_3);

        if(this.data.hide.choice_3=="choice_hide"){
            this.setData({
                opacity_shield:0.2,
                z_shield:3,
                scrollEnable:"fixed"
            });
            this.setData({"hide.filter":"filter_hide"});  
            this.setData({"hide.choice_1":"choice_hide"});  
            this.setData({"hide.choice_2":"choice_hide"});

            this.setData({"hide.choice_3":""});
        } 
        else if(this.data.hide.choice_3=="") {
            this.setData({"hide.choice_3":"choice_hide"});
            this.setData({
                opacity_shield:0,
                z_shield:0,
                scrollEnable:"relative"
            });
        }
    },
    onReady: function () {
        this.setData({
            cap_info : getApp().cap_info
          });
        this.animation = wx.createAnimation();
    },
    menuTap:function(e){
        console.log(e)
    },
})