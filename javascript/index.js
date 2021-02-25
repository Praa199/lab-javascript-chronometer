const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
//const what = document.querr
// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes())
  let sec = chronometer.twoDigitsNumber(chronometer.getSeconds())

  minDec.innerHTML = min[0]
  minUni.innerHTML = min[1]
  secDec.innerHTML = sec[0]
  secUni.innerHTML = sec[1]
  
}

function printMinutes() {

  let mins = chronometer.twoDigitsNumber(getMinutes())

  minUni = mins[0]
  minDec = mins[1]
}

function printSeconds() {

  let secs = chronometer.twoDigitsNumber(getSeconds())

  secUni = secs[0]
  secDec = secs[1]
}

// ==> BONUS
function printMilliseconds() {

  let millis = chronometer.twoDigitsNumber(chronometer.miliseconds)

  milUni.innerHTML = millis[1]
  milDec.innerHTML = millis[0]
}

function printSplit() {
  // ... your code goes here
  let newSplit = document.createElement('li')
  let time = chronometer.splitClick()

  newSplit.innerHTML = time
  splits.appendChild(newSplit)
}

function clearSplits() {

  splits.innerHTML = ""
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.innerText = 'STOP'
  btnLeft.className = 'btn stop'
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerText = 'SPLIT' 
  btnRight.className = 'btn split'
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.innerText = 'START'
  btnLeft.className = 'btn start'
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerText = 'RESET'
  btnRight.className = 'btn reset'

}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

// if (btnLeft.classList.contains('start')) {
//   btnLeft.innerText = 'STOP'
//   btnLeft.className = 'btn stop'
//   btnRight.innerText = 'SPLIT' 
//   btnRight.className = 'btn split'
// } else {
//   btnLeft.innerText = 'START'
//   btnLeft.className = 'btn start'
//   btnRight.innerText = 'RESET' 
//   btnRight.className = 'btn reset'
// }
  if (btnLeft.classList.contains('start')){
    chronometer.startClick(printTime, printMilliseconds)
    setStopBtn()
    setSplitBtn()
  }
  else{
    chronometer.stopClick()
    setStartBtn()
    setResetBtn()
  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {

  if (btnRight.classList.contains('reset')){
    chronometer.resetClick()
    clearSplits()
    printTime()
    printMilliseconds()
  }
  else{
    
    printSplit()
  }

});
