// 廣告圖輪播
export function BannerCarousel() {
    // 宣告變數 設定為圖片的索引
    let currentIndex = 0;
    // 宣告常數 讀取圖片框架的類別(class)名稱
    const Images = document.querySelectorAll( "#Carousel > .CarouselImg" );
    // 宣告常數 讀取圖片的長度（張數）
    const totalImages = Images.length;

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

    // 按鈕功能
    document.getElementById( "NextBtn" ).addEventListener( "click", showNextImage );
    document.getElementById( "PrevBtn" ).addEventListener( "click", showPrevImage );

    // 自動輪播 每兩秒顯示下一張圖片
    setInterval( showNextImage, 2000 );
}