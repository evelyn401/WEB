// 自訂函式
export function Years(){
    // 取得 html 元素(id)
    // 新增變數 year 縮短程式碼
    let Year = document.getElementById("Year");
    let Years = new Date().getFullYear();
    Year.textContent = Years;
};