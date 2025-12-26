export function NavBar(){
    // 宣告陣列，將元素存入陣列之中;陣列資料，讀取「索引值」，索引值從0開始
    let MenuItems = ["About", "Skill", "Works", "Contact"]; 
    let MenuLinks = ["#Abouts", "#Skills", "#Works", "#Contacts"];

    // 新增 HTML標籤，利用清單列舉資料 ul....li
    
    // 宣告變數 承接資料的主框架（父元素）
    let NavId = document.getElementById("NarBar");
    // 在主框架內新增 ul清單
    let Ul = document.createElement("ul");
    // 添加 ul的 id屬性，樣式表才能讀到，（前面寫"屬性名稱"，後面寫"屬性值"）
    Ul.setAttribute("id", "MenuContent");
    // 將 ul加入到 NavId這個父元素之中
    NavId.appendChild(Ul);

    // 利用迴圈跑陣列，將陣列資料一筆一筆加入到 ul清單之中，（初始值變數 ; 條件 ; 每次執行後的動作）
    // 若讀取是陣列資料，迴圈條件要設定資料長度（筆數）

    for(let i = 0; i < MenuItems.length; i++){
        // 宣告變數，建立 li標籤
        let Li = document.createElement("li");
        // 在 li標籤內建立 a標籤
        let Alink = document.createElement("a");
        // 將 li加入到 ul 這個父元素之中
        Ul.appendChild(Li);
        // 將 a標籤加入到 li這個父元素之中
        Li.appendChild(Alink);
        // 在 a標籤內加入 連結文字
        Alink.textContent = MenuItems[i];
        // 在 a標籤內加入 href屬性，設定連結位置
        Alink.setAttribute("href", MenuLinks[i]);
    }
}