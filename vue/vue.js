import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import { BannerCarousel } from './module/Carousel.js'

createApp({
    data() {
        return {
            message: '<span style="color: red">This should be red.</span>',
            test:{
                id: "colorTest",
                class: "info",
                style: { color: "blue" }
            },
            text: "我是字串",
            // IfText:true
            IfText:false
        }
    },
    // 自訂函式內容
    methods: {
        ChangeText(){
            this.IfText = !this.IfText;
        }
    }
}).mount('#app');

// 啟動廣告圖輪播功能
BannerCarousel();