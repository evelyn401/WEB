// 1.全域環境 在瀏覽器的環境之下，全域作用域的 this 指向 window 物件
// 在Node.js的環境之下，全域作用域的 this 是gobalthis，但在頂層程式碼內this會是空物件{}
console.log(this); 

// 2.物件方法內的 this 指向該物件
const obj = {
    name: 'EVE',
    greet(){
        console.log(this.name);
    }
};
obj.greet(); // EVE

// 3.建構函式內的 this 指向新建立的物件 使用 new 關鍵字呼叫建構函式時，this會指向新建立的物件
function Person(name){
    this.name = name;
}
const person1 = new Person('Alice');
console.log(person1.name); // Alice

// 4.箭頭函式內的 this 繼承自外層作用域的 this
const confession = {
    message: "我喜歡妳！",
    start: function() {
        console.log("倒數開始...");

    // 使用箭頭函式
    setTimeout(() => {
        // 這裡的 this 會繼承外層 start 函式的 this (即 confession 物件)
            console.log("3... 2... 1...");
            console.log(this.message); 
        }, 3000); // 3秒後執行
    }
};
confession.start();

// 5. DOM事件監聽處理函式內的 this 指向觸發事件的元素
document.getElementById("myButton").addEventListener("click", function(){
    console.log(this.id); // "myButton"
});

/*
6.使用 call、apply、bind 方法改變 this 指向
    
    call(): 立即呼叫函式，參數逐一傳遞，並指定 this 指向（簡單參數）
    apply(): 立即呼叫函式，參數以陣列形式傳遞，並指定 this 指向（多參數用陣列 ex:名字電話地址）
    bind(): 不會立即呼叫函式，而是回傳一個新的函式，並指定 this 指向（事件處理先給資料，可延遲呼叫）
*/
function GreetCall(greeting, punctuation){
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
};
const user = { name: 'Bob' };
GreetCall.call(user, 'Hello', '!'); // Hello, my name is Bob!

function GreetApply(greeting, punctuation){
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
};
GreetApply.apply(user, ['Hi', '...']); // Hi, my name is Bob...

function GreetBind(){
    function Greet(greeting, punctuation){
        console.log(`${greeting}, my name is ${this.name}${punctuation}`);
    };
    const user = { name: 'Eve' };
    // 透過 bind 方法建立一個新的函式，並指定 this 指向 user 物件（部分預設參數為 'Hey'）
    const boundGreet = Greet.bind(user, 'Hey');
    // 呼叫新的函式，並傳遞剩餘的參數
    boundGreet('!!!'); // Hey, my name is Eve!!!
};
// 輸出：Hey, my name is Eve!!!
GreetBind(); // ✅ 加上這行，呼叫函式

/*
    實際使用範例
*/
//  1.物件方法共用（使用 call 或 apply在不同物件間共用方法）
// 因這是外層包裝函式（隔離作用域），所以要呼叫才會執行
function CallApplyExample(){
    const personA = { name: 'Charlie' };
    const personB = { name: 'Diana' };

    function introduce(){
        console.log(`Hello, I'm ${this.name}.`);
    };
    introduce.call(personA); // Hello, I'm Charlie.
    introduce.apply(personB); // Hello, I'm Diana.
};
// ✅ 加上這行，呼叫函式
CallApplyExample();

// 2.事件處理函式（使用 bind 綁定 this 指向特定物件）
function BindExample(){
    // 1. 建立一個計數器物件
    const counter = {
        count: 0,  // 初始計數為 0
        increment(){  // 遞增方法
            this.count++;  // 將 count 加 1
            console.log(this.count);  // 輸出當前計數
        }
    };
    // 2. 取得 ID 為 "MyCount" 的按鈕元素
    const Button = document.getElementById("MyCount");
    // 3. 綁定點擊事件，呼叫新的函式，並傳遞剩餘的參數
    Button.addEventListener("click", counter.increment.bind(counter));
    //                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //                               使用 bind() 確保 this 指向 counter 物件
}
// 呼叫函式來設定事件監聽器
BindExample();  

// 製作加一減一按鈕
function BindExample(){
    // 1. 建立一個計數器物件
    const counter = {
        count: 0,  // 初始計數為 0
        increment(){  // 遞增方法
            this.count++;  // 將 count 加 1
            console.log(this.count);  // 輸出當前計數
            document.getElementById("Number").innerText = this.count; // 更新顯示
            // 當計數大於 0 時，啟用遞減按鈕
            if(this.buttonMinus) {
                this.buttonMinus.disabled = false;
            }
        },
        decrement(){  // 遞增方法
            if(this.count > 0){  // ✅ 判斷計數是否大於 0
                this.count--;  // 將 count 減 1
                console.log(this.count);  // 輸出當前計數
                document.getElementById("Number").innerText = this.count; // 更新顯示
            } else {
                console.log("最少為0");  // 提示訊息
            }
            // 當計數等於 0 時，禁用遞減按鈕
            if(this.count === 0 && this.buttonMinus) {
                this.buttonMinus.disabled = true;
            }
        }
    };
    // 初始化顯示數字為 0
    document.getElementById("Number").textContent = "0"; 
    // 2. 取得 ID 為 "MyCount" 的按鈕元素
    const ButtonPlus = document.getElementById("MyCountPlus");
    const ButtonMinus = document.getElementById("MyCountMinus");
    // 將按鈕參考儲存到 counter 物件中
    counter.buttonMinus = ButtonMinus;
    // 初始狀態：因為計數為 0，所以禁用遞減按鈕
    ButtonMinus.disabled = true;
    // 3. 綁定點擊事件，呼叫新的函式，並傳遞剩餘的參數
    ButtonPlus.addEventListener("click", counter.increment.bind(counter));
    ButtonMinus.addEventListener("click", counter.decrement.bind(counter));
    //                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //                               使用 bind() 確保 this 指向 counter 物件
}
BindExample();  