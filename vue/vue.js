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
            ],
            // 輪播圖資料陣列，包含id class img text屬性
            CarouselItems:[
                {id:"One", class:"CarouselImg Active", img:"images/CarouselXXL/1.png", text:"Graphic Design"},
                {id:"Two", class:"CarouselImg", img:"images/CarouselXXL/2.png", text:"Storybook Design"},
                {id:"Three", class:"CarouselImg", img:"images/CarouselXXL/3.png", text:"Packaging Design"}
            ],
            // 新增：目前顯示的輪播圖索引
            currentIndex: 0,
            // 新增：自動輪播計時器(null表示未啟動)
            autoPlayInterval: null,
            // 新增：儲存選中的圖片資訊
            selectedImage: {
                src: '',
                alt: ''
            },
            // 新增：作品圖片資料
            worksImages: [
                { id: 'One', src: 'images/work/work1.png', alt: 'Packaging Design', title: 'Packaging Design' },
                { id: 'Two', src: 'images/work/work2.png', alt: 'Business card Design', title: 'Business card Design' },
                { id: 'Three', src: 'images/work/work3.png', alt: 'Storybook Design', title: 'Storybook Design' },
                { id: 'Four', src: 'images/work/work4.png', alt: 'Calendar Design', title: 'Calendar Design' },
                { id: 'Five', src: 'images/work/work5.png', alt: 'Board game Design', title: 'Board game Design' },
                { id: 'Six', src: 'images/work/work6.png', alt: 'Web Design', title: 'Web Design' },
                { id: 'Seven', src: 'images/work/work7.png', alt: 'Stamp Design', title: 'Stamp Design' },
                { id: 'Eight', src: 'images/work/work8.png', alt: 'UIUX Design', title: 'UIUX Design' },
                { id: 'Nine', src: 'images/work/work9.png', alt: 'Video Editing', title: 'Video Editing' }
            ],
        }
    },
    methods: {
        // 自訂函式內容 修改：開啟大圖並傳入圖片資訊
        ShowCloseBigImage(imageData) {
            if (imageData) {
                // 如果有傳入圖片資料，就儲存到 selectedImage
                this.selectedImage = imageData;
            }
            // 切換大圖顯示狀態（true ⇄ false）
            this.BIGIMAGE = !this.BIGIMAGE;
        },
        // 新增：切換到下一張輪播圖
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.CarouselItems.length;
            this.updateActiveClass();
        },
        // 新增：切換到上一張輪播圖，確保不會變成負數
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.CarouselItems.length) % this.CarouselItems.length;
            this.updateActiveClass();
        },
        // 新增：更新 Active 類別
        updateActiveClass() {
            this.CarouselItems.forEach((item, index) => {
                item.class = index === this.currentIndex ? "CarouselImg Active" : "CarouselImg";
            });
        },
        // 新增：啟動自動輪播 每3秒切換一次
        startAutoPlay() {
            this.autoPlayInterval = setInterval(this.nextSlide,3000); 
        },
        // 新增：停止自動輪播
        stopAutoPlay() {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    },
    // 新增：元件掛載後啟動自動輪播
    mounted() {
        this.startAutoPlay();
    },
    // 新增：元件銷毀前清除計時器
    beforeUnmount() {
        this.stopAutoPlay();
    }
}).mount('#App');

// 啟動廣告圖輪播功能
// BannerCarousel();