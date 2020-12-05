// components/tabs/tabs.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tabs:{
            type:Array,
            value:[]


        }
    },

    /**
     * 组件的初始数据
     */
    data: {
       
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleItemTap(e){
              const {index}=e.currentTarget.dataset;
              this.triggerEvent("itemChange",{index});

              /*
              // 最好不要直接修改原始數據 let {tabs} = this.data;
              let tabs = JSON.parse(JSON.stringify(this.data.tabs)); 

              tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);

              this.setData({
                  tabs
              })// 这一种方法只能更改子页面的data 也就是上面data{}
              */
        
            }
    }
})
