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
    
    call(): 立即呼叫函式，參數逐一傳遞，並指定 this 指向
*/
function Greet(greeting, punctuation){
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
};
const user = { name: 'Bob' };
Greet.call(user, 'Hello', '!'); // Hello, my name is Bob!

