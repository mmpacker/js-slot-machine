// JS Slot Machine by Matt Packer

// CONSTANTS

    //Images
const eTankImg = 'images/eTankGif_resize.gif';
const metImg = 'images/metGif2_resize.gif';
const protoImg = 'images/protoManGif_resize.gif';
const wilyImg = 'images/wilyGif_resize.gif';
const mmImg = 'images/mmGif2_resize2.gif';

const imageDefault1 = 'images/mm1Up_resize.gif';
const imageDefault2 = 'images/mmTitle_resize.gif';

const spinImg = 'images/mmSpin_resize.gif'


    //Sounds
let quarterDrop = new Audio('../audio/SFX_QuarterDrop.wav')
let pullLever = new Audio('../audio/slotPullLever.flac')
let enemyChosen = new Audio('../audio/mm_EnemyChosen.mp3')
let reelStop = new Audio('../audio/08-openMenu.wav')
let jackpotSound = new Audio('../audio/mmVictory.mp3');
let wilySound = new Audio('../audio/mm_DrWilysMap.mp3')
let protoSound = new Audio('../audio/mm_EnemyChosen.mp3')
let mm1upSound = new Audio('../audio/02-mm1up.wav')
let gameOverSound = new Audio('../audio/05-mmDeath.wav')
let selectSound = new Audio('../audio/09-selectMenu.wav')

const soundOn = '🔈'
const soundOff = '🔇'


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

let sound = '';


// CACHED ELEMENT REFERENCES
const reelsEl = document.getElementById('reels');    

const slotEl1 = document.getElementById('el1');
const slotEl2 = document.getElementById('el2');
const slotEl3 = document.getElementById('el3');

const winCrEl = document.getElementById('crWon');
const remainCrEl = document.getElementById('crRemain');
const messageEl = document.getElementById('slotMsg');

const soundEl = document.getElementById('sound');

const spinBtn = document.getElementById('spinBtn');
const resetBtn = document.getElementById('resetBtn');


// EVENT LISTENERS
spinBtn.addEventListener('click', spin)

resetBtn.addEventListener('click', init)

soundEl.addEventListener('click', soundToggle)


// FUNCTIONS

// Initialize
function init(){
    confetti.stop();

    reel1State = imageDefault1;
    reel2State = imageDefault2;
    reel3State = imageDefault1;
    slotEl1.src = reel1State;
    slotEl2.src = reel2State;
    slotEl3.src = reel3State;
    
    isWinner = null;
    remainCredits = 10;
    winCredits = 0;
    messageEl.innerText = `Press SPIN to Play!`;
    remainCrEl.innerText = remainCredits;
    winCrEl.innerText = winCredits;
    
    sound = true;
    soundEl.innerText = soundOn 

    randNum1 = null;
    randNum2 = null;
    randNum3 = null;

    if(sound === true){
        quarterDrop.play();
    }
}


// Click Handler
function spin(){ 
    confetti.stop();

    if (remainCredits <= 0) {
        messageEl.innerText = `Game Over! Press RESET!`

        if(sound === true){
            gameOverSound.play();
        }

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

        if(sound === true){
            pullLever.play();
            setTimeout(function(){
                enemyChosen.play();
            },1000)
        }

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
        reel2State = mmImg
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
    setTimeout(renderReel1, 5000);
}


// Render
function renderReel1(){
    slotEl1.src = reel1State
    
    if(sound === true){
        reelStop.play();
    }

    setTimeout(renderReel2, 1500)
}

function renderReel2(){
    slotEl2.src = reel2State
    
    if(sound === true){
        reelStop.play();
    }

    setTimeout(renderReel3, 1500)
}

function renderReel3(){
    slotEl3.src = reel3State
    
    if(sound === true){
        reelStop.play();
    }

    setTimeout(renderFinal, 500)
}

function renderFinal(){
    if(isWinner === 'J') {
        messageEl.innerText = `MEGA JACKPOT WINNER!!! 🤖`
        
        if(sound === true){
            jackpotSound.play();
        }

        confetti.start();

        winCredits = 1000
        winCrEl.innerText = winCredits

        remainCredits = (remainCredits + winCredits)
        remainCrEl.innerText = remainCredits
    } else if (isWinner === 'W4') {
        messageEl.innerText = `Triple Wily Winner! 💀`
        
        if(sound === true){
            wilySound.play();
        }

        winCredits = 500
        winCrEl.innerText = winCredits

        remainCredits = (remainCredits + winCredits)
        remainCrEl.innerText = remainCredits
    } else if (isWinner === 'W3') {
        messageEl.innerText = `Triple Proto Winner!`
        
        if(sound === true) {
            protoSound.play();
        }

        winCredits = 250
        winCrEl.innerText = winCredits

        remainCredits = (remainCredits + winCredits)
        remainCrEl.innerText = remainCredits
    } else if (isWinner === 'W2') {
        messageEl.innerText = `You Win! 💯`
        
        if(sound === true) {
            mm1upSound.play();
        }

        winCredits = 100
        winCrEl.innerText = winCredits

        remainCredits = (remainCredits + winCredits)
        remainCrEl.innerText = remainCredits
    } else if (isWinner === 'W1') {
        messageEl.innerText = `Winner!`
        
        if(sound === true){
            mm1upSound.play();
        }

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

            if(sound === true){
                selectSound.play();
            }

        } else {
            messageEl.innerText = `Game Over! Press RESET!`

            if(sound === true){
                gameOverSound.play();
            }
        }
    }
};


// Sound On-Off
function soundToggle(){
    if (sound === false){
        sound = true;
        soundEl.innerText = soundOn;
    } else {
        sound = false;
        quarterDrop.pause();
        pullLever.pause();
        enemyChosen.pause();
        reelStop.pause();
        jackpotSound.pause();
        wilySound.pause();
        protoSound.pause();
        mm1upSound.pause();
        gameOverSound.pause();
        selectSound.pause();
        soundEl.innerText = soundOff;
    }
}

// INVOKE INIT
init();