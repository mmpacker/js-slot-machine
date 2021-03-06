// JS Slot Machine by Matt Packer

// CONSTANTS

const playImg = {
    'img1': '➖',
    'img2': '🍒',
    'img3': '🔔',
    'img4': '💎',
    'img5': '7️⃣',
}

// VARIABLES (state)
let re1 = null;
let re2 = null;
let re3 = null;
let isWinner = '';
let winCredits = '';
let playerCredits = '';
let randNum1 = null;
let randNum2 = null;
let randNum3 = null;

// CACHED ELEMENT REFERENCES
const reel1El = document.getElementById('reel1');
const reel2El = document.getElementById('reel2');
const reel3El = document.getElementById('reel3');

let messageEl = document.getElementById('slotMsg');

// EVENT LISTENERS
document.getElementById('spinBtn').addEventListener('click', spinReels)

document.getElementById('resetBtn').addEventListener('click', init)

// FUNCTIONS

// Initialize
function init(){
    re1 = null;
    re2 = null;
    re3 = null;
    isWinner = null;
    playerCredits = 100;
    winCredits = '';
    messageEl = `Press SPIN to Play!`
    randNum1 = null;
    randNum2 = null;
    randNum3 = null;
    render();
}

// Click Handler
function spinReels(){
    playerCredits = (playerCredits - 1);
    re1 = null;
    re2 = null;
    re3 = null;
    console.log(playerCredits);
    render();
    ckWinner();
}

// Spin Reels
function spinReel1(){ 
    let result1;
    randNum1 = Math.floor(Math.random() * ((100-1)+1)) + 1;
    if(randNum1 >= 1 && randNum1 <= 50){
        result1 = playImg.img1
    } else if(randNum1 >= 51 && randNum1 <= 65) {
        result1 = playImg.img2
    } else if(randNum1 >= 66 && randNum1 <= 80) {
        result1 = playImg.img3
    } else if (randNum1 >= 81 && randNum1 <= 90) {
        result1 = playImg.img4
    } else if (randNum1 >= 91 && randNum1 <= 100) {
        result1 = playImg.img5
    }
    console.log(result1)
    return result1;
}

function spinReel2(){ 
    let result2;
    randNum2 = Math.floor(Math.random() * ((100-1)+1)) + 1;
    if(randNum2 >= 1 && randNum2 <= 75){
        result2 = playImg.img1
    } else if(randNum2 >= 76 && randNum2 <= 90) {
        result2 = playImg.img2
    } else if(randNum2 >= 91 && randNum2 <= 95) {
        result2 = playImg.img3
    } else if (randNum2 >= 96 && randNum2 <= 98) {
        result2 = playImg.img4
    } else if (randNum2 >= 99 && randNum2 <= 100) {
        result2 = playImg.img5
    }
    console.log(result2)
    return result2;
}

function spinReel3(){ 
    let result3;
    randNum3 = Math.floor(Math.random() * ((100-1)+1)) + 1;
    if(randNum3 >= 1 && randNum3 <= 75){
        result3 = playImg.img1
    } else if(randNum3 >= 76 && randNum3 <= 90) {
        result3 = playImg.img2
    } else if(randNum3 >= 91 && randNum3 <= 95) {
        result3 = playImg.img3
    } else if (randNum3 >= 96 && randNum3 <= 98) {
        result3 = playImg.img4
    } else if (randNum3 >= 99 && randNum3 <= 100) {
        result3 = playImg.img5
    }
    console.log(result3)
    return result3;
}

// Check Winner
function ckWinner(){

}

// Render
function render(){
    re1 = setInterval(spinReel1, 50)
    reel1El.innerText = re1;

    re2 = setInterval(spinReel2, 50)
    reel2El.innerText = re2;

    re3 = setInterval(spinReel3, 50)
    reel3El.innerText = re3;

    if(isWinner = 'J') {
        messageEl.innerText = `JACKPOT!!! 🎉`
        

    }

}


// INVOKE INIT
init();