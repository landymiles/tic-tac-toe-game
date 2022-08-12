let lastvalue ="O"
let display = document.getElementById("display")
display.textContent = "player 1's turn to play";
// get all buttons
let boxes = document.querySelectorAll(".box");
// set click listen on all boxes
for(let box of boxes){
box.addEventListener("click",() => {
    if(box.textContent !== ""){
        return;
    }

    if (lastvalue ==='O'){
        box.textContent = "X"
        lastvalue = "X"
        display.textContent ="player 2's turn to play"
        checkGameStatus();
        checkDraw();
    } else{
        box.textContent = "O"
        lastvalue = "O"
        display.textContent ="player 1's turn to play"
        checkGameStatus();
        checkDraw();
    }
});
}
let controlBtn = document.getElementById("controlBtn");
controlBtn.addEventListener("click",() => {
window.location.href = "index.html";
});
console.log("nonso")
function checker(first,second,third){
    console.log(first,second,third)
    if(
        boxes[first].textContent ==="X"&&
        boxes[second].textContent ==="X"&&
        boxes[third].textContent ==="X"

    ){
        disableButtonsWhenGameIsWon("player 1");
    }else if(
        boxes[first].textContent ==="O"&&
        boxes[second].textContent ==="O"&&
        boxes[third].textContent ==="O"
    ){
        disableButtonsWhenGameIsWon("player 2");
    }
    }
    function checkGameStatus(){
        checker(0,1,2)
        checker(3,4,5)
        checker(6,7,8)
        checker(0,3,6)
        checker(1,4,7)
        checker(2,5,8)
        checker(0,4,8)
        checker(2,4,6)
    }
  function  disableButtonsWhenGameIsWon(player){
    for(let box of boxes){
        if(box.textContent===""){
            box.toggleAttribute("disabled")
        }
    }
    display.textContent = player + "won the game";
  }
  function checkDraw(){
    for(let box of boxes){
        if(box.textContent ===""){
            return;
        }
    }
    display.textContent = "draw";
  }