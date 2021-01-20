class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      console.log(this.time)
  }, 1000);
  }
  getMinutes() {
    // ... your code goes here
    let minute = Math.floor(this.currentTime/60)
    return minute
  }
  getSeconds() {
    // ... your code goes here
    let second = Math.floor(this.currentTime%60)
    return second
  }
  twoDigitsNumber(num) {
    // ... your code goes here
    if (num < 9) {
      return 0 + num.toString()
    }
      else if( num > 9){
        return num.toString() 
    }
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }
  resetClick() {
    // ... your code goes here
  this.currentTime = 0
  }
  splitClick() {
    // ... your code goes here
let mins = this.twoDigitsNumber(this.getMinutes())
let secs = this.twoDigitsNumber(this.getSeconds())
    return `${mins}:${secs}`

  }
}
