let lastvalue ="O"
let display = document.getElementById("display")
display.textContent = "player 1's turn to play";
// get all buttons
let boxes = document.querySelectorAll(".box");
// set click listen on all boxes
for(let box of boxes){
box.addEventListener("click",() =>{
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