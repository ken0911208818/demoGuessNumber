// 產生一個1到100間的隨機數字。
var number = Math.floor(Math.random()*100)
console.log(number);
// 從一開始，紀錄玩家目前回合數。
var round = 0
var guesses = []

function guess() {
    if (round === 10) {
        // 跳出按鈕重新開始 display: none => display: block 
        document.querySelector(".restart").style.display = 'block'
        return
    }
    // 獲取 input 內容
    let guessNumber = document.getElementById("number").value

    // 清空 input 內容
    document.getElementById("number").value = ""

    // 檢查數字是否猜中。
    if (checkingNumber(guessNumber)) {
        document.querySelector(".restart").style.display = 'block'
        return 
    }

    // 提供玩家猜數字的方向(太大還是太小)。
    checkHighLowNumber(guessNumber) 
    // 當玩家送出第一個猜測後，將猜測記錄下來，讓玩家可以看到他們之前的猜測。
    // 將陣列顯示在前端
    document.getElementById("guesses").innerText += " " + guessNumber 
    //每按一次 +1 一次 上限 10次
    round++

    
}

function checkingNumber(checkNumber){
    // console.log(number, checkNumber)
    // 這裏checkNumber 型別是字串 要轉換成數字
    checkNumber = parseInt(checkNumber)
    
    // 確認猜的數字與亂數產生是否一致
    if (number === checkNumber) {
        // 如果數字猜對：
        // 顯示恭喜訊息。
        //正確將訊息改成綠色並顯示成功
        document.querySelector(".alert").style.backgroundColor = 'green'
        document.querySelector(".alert span").textContent  = "成功"
        return true
    } else {
        // 錯誤將訊息改成紅色並顯示Wrong
        document.querySelector(".alert").style.backgroundColor = 'red'
        document.querySelector(".alert span").textContent  = "失敗"
        return false
    }
    

}

function checkHighLowNumber(checkNumber) {
    // 這裏checkNumber 型別是字串 要轉換成數字
    checkNumber = parseInt(checkNumber)
    //  ex 100 - 90 代表數字高過於他
    if ((checkNumber - number) > 0) {
        return document.getElementById("highLow").textContent = "Last guess was too high!"
    } 
    return document.getElementById("highLow").textContent = "Last guess was too low!"
}
// 重新歸零
function reStart() {
    // 按下按鈕記得隱藏  display: block => display: none 
    document.querySelector(".restart").style.display = 'none'
    // 計時歸零
    round = 0
    //將猜過的數字 取消
    document.getElementById("guesses").innerText = " "
    // 重新產生一個數字
    number = Math.floor(Math.random()*100)
}
// 使玩家不能再輸入更多猜測(避免把遊戲玩壞)。
// 顯示控制鈕讓玩家可以重新開始遊戲。
// 如果數字猜錯而且玩家有剩餘回合數：
// 告訴玩家他猜錯了。
// 讓玩家輸入其他的猜測
// 回合數增加1。
// 如果數字猜錯而且玩家沒有剩餘回合數：
// 告訴玩家遊戲結束。
// 使玩家不能再輸入更多猜測(避免把遊戲玩壞)。
// 顯示控制鈕讓玩家可以重新開始遊戲。
// 當遊戲重新開始，確保遊戲邏輯和畫面(UI，使用這介面)全面重設，然後回到第一步。
