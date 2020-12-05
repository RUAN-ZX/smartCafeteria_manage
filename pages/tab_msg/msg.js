Page({
    data: {
        
        cap_info:{},
        combobox:{},
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
        
        this.setData({'hide.choice_1':"choice_hide"}); 

        this.setData({
            opacity_shield:0,
            z_shield:0,
            scrollEnable:"relative"
        });
    },
    
    
    onLoad: function () {
      let _this = this;
      let _combobox = {
        last_index: 0,
        name: "",
        child: getApp().Eyear
      };
      let index = _combobox.last_index;
      _combobox.name = _combobox.child[index].name;
      _combobox.child[index].css = "active";
      _this.setData({
          cap_info : getApp().cap_info,
          combobox:_combobox
        });
      
    },
    menuTap:function(e){
      console.log(e);
    },
    addTap:function(e){
      wx.navigateTo({
        url: '/pages/addmenu/addmenu',
      })
    }
    
})