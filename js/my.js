let count = 0;
const names = "Chocho Kay";
const welcomeMsg = "Welcome"
let introMsg = `${welcomeMsg}  ${names}`;
let welcomeEl = document.querySelector("#welcome-el");
let saveEl = document.querySelector("#save-el");
let saveBtn =document.querySelector("#save-btn");
let resetBtn = document.querySelector("#reset-btn")
let countEl = document.querySelector("#count-el");

function pageOnLoad(){
    welcomeEl.innerText = introMsg;
}

function increment(){
    count += 1;
    countEl.textContent = count;  
}

saveBtn.addEventListener("click", function save(){
    let countStr = ' ' + count + ' - ';
    saveEl.innerText += countStr;
    count = 0;
    countEl.innerText = count; 
})

resetBtn.addEventListener("click", reset);
function reset(){
    let countStr = ' ';
    saveEl.textContent = `Previous entries: ${countStr}`;
    count = 0;
    countEl.innerText = 0; 
}