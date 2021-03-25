// Clue time variables
var clueHoldTime = 1000;
var cluePauseTime = 333; 
var nextClueWaitTime = 1000; 
var clueHoldTimeDecrement = 50;

// Globals
var pattern = [];
var patternLength = 8;
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var mistakeCounter = 0;

// elements
const difficultyList = document.getElementById("difficulty");

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  
  // Handle difficulty level
  const difficulty = difficultyList.value;
  difficultyList.disabled = true;
  switch (difficulty) {
    case "Easy":
      clueHoldTime = 1000;
      cluePauseTime = 333; 
      nextClueWaitTime = 1000;
      patternLength = 6;
      clueHoldTimeDecrement = 20;
      break;
    case "Medium":
      clueHoldTime = 875;
      cluePauseTime = 300; 
      nextClueWaitTime = 875;
      patternLength = 8;
      clueHoldTimeDecrement = 30;
      break;
    case "Hard":
      clueHoldTime = 750;
      cluePauseTime = 250; 
      nextClueWaitTime = 750;
      patternLength = 10;
      clueHoldTimeDecrement = 45;
      break;
    default:
  }
  
  // randomize pattern
  for (let i = 0; i < patternLength; i++) {
    pattern.push(Math.floor(Math.random() * 4) + 1);
  }
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  pattern = [];
  gamePlaying = false;
  difficultyList.disabled = false;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clueHoldTime -= clueHoldTimeDecrement;
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // add game logic here
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    mistakeCounter++;
    if (mistakeCounter > 2) {
      //GAME OVER: LOSE!
      loseGame();
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 391.995, // G4
  2: 587.33, // D5
  3: 659.255, // E5
  4: 523.251 // C5
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)