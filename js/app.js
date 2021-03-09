// JS Slot Machine by Matt Packer

// CONSTANTS

    //Images
const eTankImg = 'images/eTankGif_resize.gif';  //E-Tank - 50
const metImg = 'images/metGif2_resize.gif'; // Met - 100
const protoImg = 'images/protoManGif_resize.gif'; // Proto Man - 250
const wilyImg = 'images/wilyGif_resize.gif'; // Dr. Wily - 500
const mmImg = 'images/mmGif_resize.gif'; // Mega Man - 1000 (Jackpot)

const imageDefault1 = 'images/mm1Up_resize.gif';
const imageDefault2 = 'images/mmTitle_resize.gif';

const spinImg = 'images/mmSpin_resize.gif'

    //Audio
const quarterDrop = new Audio('../audio/SFX_QuarterDrop.wav')

// VARIABLES (state)

let reel1State = '';
let reel2State = '';
let reel3State = '';

let isWinner = '';

let winCredits = 0;
let remainCredits = 0;

let randNum1 = null;
let randNum2 = null;
let randNum3 = null;


// CACHED ELEMENT REFERENCES

const slotEl1 = document.getElementById('el1');
const slotEl2 = document.getElementById('el2');
const slotEl3 = document.getElementById('el3');

const winCrEl = document.getElementById('crWon')
const remainCrEl = document.getElementById('crRemain')
const messageEl = document.getElementById('slotMsg');


// EVENT LISTENERS

document.getElementById('spinBtn').addEventListener('click', spin)

document.getElementById('resetBtn').addEventListener('click', init)


// FUNCTIONS

// Initialize
function init(){
    reel1State = imageDefault1;
    reel2State = imageDefault2;
    reel3State = imageDefault1;
    slotEl1.src = reel1State;
    slotEl2.src = reel2State;
    slotEl3.src = reel3State;
    
    isWinner = null;
    remainCredits = 100;
    winCredits = 0;
    messageEl.innerText = `Press SPIN to Play!`;
    remainCrEl.innerText = remainCredits;
    winCrEl.innerText = winCredits;
    
    randNum1 = null;
    randNum2 = null;
    randNum3 = null;

    quarterDrop.play();
    setTimeout(quarterDrop.play, 3000)
}


// Click Handler
function spin(){
    if (remainCredits <= 0) {
        messageEl.innerText = `Game Over! Press RESET to play again!`
    } else {
        remainCredits = (remainCredits - 1);
        winCredits = 0;
        
        isWinner = '';
        
        messageEl.innerText = `Reels Spinning...`;
        
        reel1State = spinImg;
        reel2State = spinImg;
        reel3State = spinImg;
        slotEl1.src = reel1State;
        slotEl2.src = reel2State;
        slotEl3.src = reel3State;

        spinReel1();
        spinReel2();
        spinReel3();

        ckWinner();
    }
}


// Spin Reels
function spinReel1(){ 
    randNum1 = Math.floor(Math.random() * ((100-1)+1)) + 1;
    if(randNum1 >= 1 && randNum1 <= 50){
        reel1State = eTankImg
    } else if(randNum1 >= 51 && randNum1 <= 65) {
        reel1State = metImg
    } else if(randNum1 >= 66 && randNum1 <= 80) {
        reel1State = protoImg
    } else if (randNum1 >= 81 && randNum1 <= 90) {
        reel1State = wilyImg
    } else if (randNum1 >= 91 && randNum1 <= 100) {
        reel1State = mmImg
    }
}


function spinReel2(){ 
    randNum2 = Math.floor(Math.random() * ((100-1)+1)) + 1;
    if(randNum2 >= 1 && randNum2 <= 75){
        reel2State = eTankImg
    } else if(randNum2 >= 76 && randNum2 <= 90) {
        reel2State = metImg
    } else if(randNum2 >= 91 && randNum2 <= 95) {
        reel2State = protoImg
    } else if (randNum2 >= 96 && randNum2 <= 98) {
        reel2State = wilyImg
    } else if (randNum2 >= 99 && randNum2 <= 100) {
        reel2State = mmImg
    }
}

function spinReel3(){ 
    randNum3 = Math.floor(Math.random() * ((100-1)+1)) + 1;
    if(randNum3 >= 1 && randNum3 <= 75){
        reel3State = eTankImg
    } else if(randNum3 >= 76 && randNum3 <= 90) {
        reel3State = metImg
    } else if(randNum3 >= 91 && randNum3 <= 95) {
        reel3State = protoImg
    } else if (randNum3 >= 96 && randNum3 <= 98) {
        reel3State = wilyImg
    } else if (randNum3 >= 99 && randNum3 <= 100) {
        reel3State = mmImg
    }
}


// Check Winner
function ckWinner(){
    if(reel1State === reel2State && reel2State === reel3State && reel3State === mmImg) {
        isWinner = 'J'
    } else if (reel1State === reel2State && reel2State === reel3State && reel3State === wilyImg) {
        isWinner = 'W4'
    } else if (reel1State === reel2State && reel2State === reel3State && reel3State === protoImg) {
        isWinner = 'W3'
    } else if (reel1State === reel2State && reel2State === reel3State && reel3State === metImg) {
        isWinner = 'W2'
    } else if (reel1State === reel2State && reel2State === reel3State && reel3State === eTankImg) {
        isWinner = 'W1'
    } else {
        isWinner = 'L'
    }
    setTimeout(renderReel1, 1500);
}


// Render
function renderReel1(){
    slotEl1.src = reel1State
    setTimeout(renderReel2, 1250)
}

function renderReel2(){
    slotEl2.src = reel2State
    setTimeout(renderReel3, 1250)
}

function renderReel3(){
    slotEl3.src = reel3State
    setTimeout(renderFinal, 250)
}

function renderFinal(){
    if(isWinner === 'J') {
        messageEl.innerText = `MEGA JACKPOT WINNER!!! 🤖`
        
        winCredits = 1000
        winCrEl.innerText = winCredits

        remainCredits = (remainCredits + winCredits)
        remainCrEl.innerText = remainCredits
    } else if (isWinner === 'W4') {
        messageEl.innerText = `Triple Wily Winner! 💀`
        
        winCredits = 500
        winCrEl.innerText = winCredits

        remainCredits = (remainCredits + winCredits)
        remainCrEl.innerText = remainCredits
    } else if (isWinner === 'W3') {
        messageEl.innerText = `Triple Proto Winner!`
         
        winCredits = 250
        winCrEl.innerText = winCredits

        remainCredits = (remainCredits + winCredits)
        remainCrEl.innerText = remainCredits
    } else if (isWinner === 'W2') {
        messageEl.innerText = `You Win! 💯`
        
        winCredits = 100
        winCrEl.innerText = winCredits

        remainCredits = (remainCredits + winCredits)
        remainCrEl.innerText = remainCredits
    } else if (isWinner === 'W1') {
        messageEl.innerText = `Winner!`
        
        winCredits = 50
        winCrEl.innerText = winCredits

        remainCredits = (remainCredits + winCredits)
        remainCrEl.innerText = remainCredits
    } else {
        winCredits = 0
        winCrEl.innerText = winCredits

        remainCredits = (remainCredits + winCredits)
        remainCrEl.innerText = remainCredits
        if(remainCredits > 0) {
            messageEl.innerText = `Press SPIN to try again!`
        } else {
            messageEl.innerText = `Game Over! Press RESET to play again!`
        }
    }
};

// INVOKE INIT
init()