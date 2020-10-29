// 產生一個1到100間的隨機數字。
var number = Math.floor(Math.random()*100)

// 從一開始，紀錄玩家目前回合數。
var round = 0
var guesses = []
function guess() {
    // 獲取 input 內容
    let guessNumber = document.getElementById("number").value
    // 清空 input 內容
    document.getElementById("number").value = ""
    // 將陣列顯示在前端
    document.getElementById("guesses").innerText += " " + guessNumber 
}
// 提供玩家猜數字的方向(太大還是太小)。
// 當玩家送出第一個猜測後，將猜測記錄下來，讓玩家可以看到他們之前的猜測。
// 接著檢查數字是否猜中。
// 如果數字猜對：
// 顯示恭喜訊息。
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
