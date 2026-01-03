import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import { BannerCarousel } from './module/Carousel.js'

const app = createApp({
    data() {
        return {
            message: '<span style="color: red">This should be red.</span>',
            test:{
                id: "colorTest",
                class: "info",
                style: { color: "blue" }
            },
            text: "我是字串",
            IfText:true
            // IfText:false
        }
    },
    // 自訂函式內容
    methods: {
        ChangeText(){
            this.IfText = !this.IfText;
        }
    }
}).mount('#app');

const app2 = createApp({
    data() {
        return {
            BIGIMAGE: true,
            // 定義導覽列選單資料陣列，包含id text link屬性
            NavItems:[
                {id:"NavAbout" , text:"About", link:"#Abouts"},
                {id:"NavSkills" , text:"Skills", link:"#Skills"},
                {id:"NavWorks" , text:"Works", link:"#Works"},
                {id:"NavContact" , text:"Contact", link:"#Contacts"}
            ]
        }
    },
    methods: {
        // 自訂函式內容
        ShowCloseBigImage(){
            this.BIGIMAGE = !this.BIGIMAGE;
        }
    }
}).mount('#App');

// 啟動廣告圖輪播功能
BannerCarousel();