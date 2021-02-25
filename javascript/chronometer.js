class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
    this.miliseconds = 0
    this.miliIntervalId = 0

  }

  startClick(callback, callbackMili) {

    this.intervalId = setInterval(() => {
      this.currentTime += 1
      //console.log(this.currentTime)
      callback()
  }, 1000);

  this.miliIntervalId = setInterval(() => {
    this.miliseconds += 1
    //console.log(this.miliseconds)
    callbackMili(this.miliseconds)
}, 10);

  }

  getMinutes() {

    return Math.floor(this.currentTime / 60)

  }
  
  getSeconds() {
    
    return Math.floor(this.currentTime % 60)

  }

  twoDigitsNumber(value) {
    let num = '0' + value

    return num.slice(-2)

  }

  stopClick() {

    clearInterval(this.intervalId)
    clearInterval(this.miliIntervalId)
  }

  resetClick() {

  this.currentTime = 0
  this.miliseconds = 0
  }

  splitClick() {

let mins = this.twoDigitsNumber(this.getMinutes())
let secs = this.twoDigitsNumber(this.getSeconds())
let mill = this.twoDigitsNumber(this.miliseconds)
    return `${mins}:${secs}:${mill}`

  }
}
