Page({
  data: {
    menu_num:"0",
    menu_price:"0",
    cafeteria:{
      name: "第五餐厅",
      sold: "23610",
      per: "9.6",
      star: "4.9",
      src: "../../jpg/food/6.jpg"
    },
    info: "热销推荐: 大家都说好 才是真的好",
    menuDiv_css: ["choosen","unchoosen","unchoosen","unchoosen","unchoosen","unchoosen"],
    
    menuDiv: [
      {
        name: "热销推荐",
        text: "大家都说好 才是真的好"
      },
      {
        name: "素菜爽口",
        text: "素菜 爽口搭配"
      },
      {
        name: "大口吃荤",
        text: "荤菜 大口吃肉"
      },
      {
        name: "早餐",
        text: "早餐吃好"
      },
      {
        name: "中餐",
        text: "中餐吃饱"
      },
      {
        name: "晚餐",
        text: "晚餐吃少"
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
      

      
    ], 
    menu_choose: [
      
    ], 
    
  },
  addTap:function(e){
    let index = e.currentTarget.dataset.index;
    let num = parseInt(this.data.menu_num);
    let price = parseInt(this.data.menu_price);
    let price_menu = parseInt(this.data.menu[index].price);
    let menu_choose_temp = this.data.menu_choose;
    let menu = this.data.menu;
    menu_choose_temp.push(menu[index]);
    this.setData({
      menu_num: num+1,
      menu_price: price+price_menu,
      menu_choose: menu_choose_temp
    })
    // console.log(this.data.menu_num+"  "+this.data.menu_price);
  },
  orderTap:function(e){

    let menu = this.data.menu_choose;
    let menu_price = this.data.menu_price;
    console.log(menu.length);
    if(menu.length==0){
      wx.showToast({
        title: '您还没有点菜哟',
        icon: 'none',
        duration: 1000,
        mask:true
    })
    }
    else{
      wx.navigateTo({
        url: "/pages/order/order", // 打开的目标页面
        success: (res) => {
          // 通过eventChannel向被打开页面传送数据,目标页面是listDetail,这个data名字是你自己取的任意,在目标页面中有个参数接收就可以
          res.eventChannel.emit('parentPageEmit',
           { 
             menu: menu,
             account: menu_price
           });
        },
      });
  
    }
    
  },
  menuDiv:function(e){
    let index = e.currentTarget.dataset.index;
    let a = [];
    for(let i = 0;i<6;i++){
      if(i==index) a.push("choosen");
      a.push("unchoosen");
    }
    this.setData({
      menuDiv_css:a
      // 
    })
    
    // console.log(e);
    // get data
  },
  backTap: function(){
    wx.navigateBack({
      delta: 1,
      complete: (res) => {console.log(res)},
    })
  }
})