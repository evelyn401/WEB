// 廣告圖輪播

/*
    初始進入頁面，每兩秒自動輪播圖片，並且可以透過前後按鈕切換圖片

    修正 
    1.手動點擊時，會中斷自動輪播的問題
    2.若三秒內沒有手動點擊，則繼續自動輪播
    3.連續快速點擊按鈕時：
    不會導致圖片閃爍的問題，setTimeout()應確保 setInterval() 不會與手動切換圖片的函式衝突，只能有一個在運行
 */

export function BannerCarousel() {
    // 宣告變數 設定為圖片的索引
    let currentIndex = 0;
    // 宣告常數 讀取圖片框架的類別(class)名稱
    const Images = document.querySelectorAll( "#Carousel > .CarouselImg" );
    // 宣告常數 讀取圖片的長度（張數）
    const totalImages = Images.length;

    // 20251224新增資料
    // 存放自動播放的計時器
    let autoPlayInterval;
    // 存放延遲重啟的計時器
    let restartTimeout;

    // 顯示下一張圖片的函式
    function showNextImage() {
        // 隱藏目前的圖片 Active
        Images[currentIndex].classList.remove( "Active" );
        // 計算圖片的索引值 求餘數 % 被除數（目前的圖片索引 + 1）除以 總圖片數量
        currentIndex = ( currentIndex + 1 ) % totalImages;
        // 顯示下一張圖片 Active
        Images[currentIndex].classList.add( "Active" );
    }
    // 顯示上一張圖片的函式
    function showPrevImage() {
        // 隱藏目前的圖片 Active
        Images[currentIndex].classList.remove( "Active" );
        // 計算圖片的索引值 求餘數 % 被除數（目前的圖片索引 - 1 + 總圖片數量）除以 總圖片數量
        // 加上 總圖片數量 是為了避免出現負數的情況 
        currentIndex = ( currentIndex - 1 + totalImages ) % totalImages;
        // 顯示上一張圖片 Active
        Images[currentIndex].classList.add( "Active" );
    }

    // 啟動自動輪播 每兩秒顯示下一張圖片
    function startAutoPlay() {
        autoPlayInterval = setInterval( showNextImage, 2000 );
    }

    // 按鈕功能
    document.getElementById( "NextBtn" ).addEventListener( "click", showNextImage );
    document.getElementById( "PrevBtn" ).addEventListener( "click", showPrevImage );


}