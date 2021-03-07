// JS Slot Machine by Matt Packer

// CONSTANTS

// const playImg = {
//     'img1': '➖',
//     'img2': '🍒',
//     'img3': '🔔',
//     'img4': '💎',
//     'img5': '7️⃣',
// }

const img1 = 'images/eTankGif_resize.gif';
const img2 = 'images/metGif2_resize.gif';
const img3 = 'images/rushCoilGif_resize.gif';
const img4 = 'images/wileyGif_resize.gif';
const img5 = 'images/mmGif_resize.gif';
const imageDefault1 = 'images/mm1Up_resize.gif';
const imageDefault2 = 'images/mmTitle_resize.gif';


// VARIABLES (state)
let re1 = null;
let re2 = null;
let re3 = null;
let isWinner = '';
let winCredits = 0;
let playerCredits = 0;
let randNum1 = null;
let randNum2 = null;
let randNum3 = null;

// CACHED ELEMENT REFERENCES
// const reel1El = document.getElementById('reel1');
// const reel2El = document.getElementById('reel2');
// const reel3El = document.getElementById('reel3');
const slotEl1 = document.getElementById('el1');
const slotEl2 = document.getElementById('el2');
const slotEl3 = document.getElementById('el3');

let winCrEl = document.getElementById('crWon')
let crLeftEl = document.getElementById('crLeft')
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
    winCredits = 0;
    messageEl.innerText = `Press SPIN to Play!`;
    crLeftEl.innerText = playerCredits;
    winCredits.innerText = winCredits;
    slotEl1.src = imageDefault1;
    slotEl2.src = imageDefault1;
    slotEl3.src = imageDefault1;
    randNum1 = null;
    randNum2 = null;
    randNum3 = null;
}

// Click Handler
function spinReels(){
    if (playerCredits <= 0) {
        messageEl.innerText = `Game Over! Press RESET to play again!`
    } else {
        playerCredits = (playerCredits - 1);
        winCredits = 0;
        isWinner = '';
        messageEl.innerText = `Reels Spinning...`;
        re1 = null;
        re2 = null;
        re3 = null;
        console.log(playerCredits);
        render();
    }
}

// Spin Reels

function spinReel1(){ 
    setTimeout( function() {
        let result1;
        randNum1 = Math.floor(Math.random() * ((100-1)+1)) + 1;
        if(randNum1 >= 1 && randNum1 <= 50){
            result1 = img1
        } else if(randNum1 >= 51 && randNum1 <= 65) {
            result1 = img2
        } else if(randNum1 >= 66 && randNum1 <= 80) {
            result1 = img3
        } else if (randNum1 >= 81 && randNum1 <= 90) {
            result1 = img4
        } else if (randNum1 >= 91 && randNum1 <= 100) {
            result1 = img5
        }
        return result1;
    }, 2000);
    console.log(result1)
}

function spinReel2(){ 
    setTimeout( function() {
        let result2;
        randNum2 = Math.floor(Math.random() * ((100-1)+1)) + 1;
        if(randNum2 >= 1 && randNum2 <= 75){
            result2 = img1
        } else if(randNum2 >= 76 && randNum2 <= 90) {
            result2 = img2
        } else if(randNum2 >= 91 && randNum2 <= 95) {
            result2 = img3
        } else if (randNum2 >= 96 && randNum2 <= 98) {
            result2 = img4
        } else if (randNum2 >= 99 && randNum2 <= 100) {
            result2 = img5
        }
        return result2;
    }, 2000);
    console.log(result2)
}

function spinReel3(){ 
    setInterval( function() {
        let result3;
        randNum3 = Math.floor(Math.random() * ((100-1)+1)) + 1;
        if(randNum3 >= 1 && randNum3 <= 75){
            result3 = img1
        } else if(randNum3 >= 76 && randNum3 <= 90) {
            result3 = img2
        } else if(randNum3 >= 91 && randNum3 <= 95) {
            result3 = img3
        } else if (randNum3 >= 96 && randNum3 <= 98) {
            result3 = img4
        } else if (randNum3 >= 99 && randNum3 <= 100) {
            result3 = img5
        }
        return result3;
    }, 2000);
    console.log(result3)
}

// Check Winner
function ckWinner(){
    if(re1 === re2 && re2 === re3 && re3 === img5) {
        isWinner = 'J'
    } else if (re1 === re2 && re2 === re3 && re3 === img4) {
        isWinner = 'W4'
    } else if (re1 === re2 && re2 === re3 && re3 === img3) {
        isWinner = 'W3'
    } else if (re1 === re2 && re2 === re3 && re3 === img2) {
        isWinner = 'W2'
    } else if (re1 === re2 && re2 === re3 && re3 === img1) {
        isWinner = 'W1'
    } else {
        isWinner = 'L'
    }
    console.log(isWinner)
}

// Render
function render(){
    sr1 = setInterval(spinReel1, 1000)
    sr2 = setInterval(spinReel2, 1000)
    sr3 = setInterval(spinReel3, 1000)
    
    re1 = spinReel1();
    slotEl1.src = re1

    re2 = spinReel2();
    slotEl2.src = re2

    re3 = spinReel3();
    slotEl3.src = re3
    
    ckWinner();
    
    if(isWinner === 'J') {
        messageEl.innerText = `MEGA JACKPOT WINNER!!! 🎉 🤖 🎉`
        
        winCredits = 1000
        winCrEl.innerText = winCredits

        playerCredits = (playerCredits + winCredits)
        crLeftEl.innerText = playerCredits
    } else if (isWinner === 'W4') {
        messageEl.innerText = `Wiley Winner! 💀`
        
        winCredits = 500
        winCrEl.innerText = winCredits

        playerCredits = (playerCredits + winCredits)
        crLeftEl.innerText = playerCredits
    } else if (isWinner === 'W3') {
        messageEl.innerText = `Rush Winner! 🐕`
         
        winCredits = 250
        winCrEl.innerText = winCredits

        playerCredits = (playerCredits + winCredits)
        crLeftEl.innerText = playerCredits
    } else if (isWinner === 'W2') {
        messageEl.innerText = `You Win! 💯`
        
        winCredits = 100
        winCrEl.innerText = winCredits

        playerCredits = (playerCredits + winCredits)
        crLeftEl.innerText = playerCredits
    } else if (isWinner === 'W1') {
        messageEl.innerText = `Winner!`
        
        winCredits = 50
        winCrEl.innerText = winCredits

        playerCredits = (playerCredits + winCredits)
        crLeftEl.innerText = playerCredits
    } else {
        winCredits = 0
        winCrEl.innerText = winCredits

        playerCredits = (playerCredits + winCredits)
        crLeftEl.innerText = playerCredits
        if(playerCredits > 0) {
            messageEl.innerText = `Press SPIN to try again!`
        } else {
            messageEl.innerText = `Game Over! Press RESET to play again!`
        }
    }
    console.log(playerCredits)
    console.log(winCredits)
};

// INVOKE INIT
init()