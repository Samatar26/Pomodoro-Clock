window.onload = function() {
//Initial Variable Declarations
var play = document.getElementById("play");
var reset = document.getElementById("reset");
var time = document.getElementById("timerInput");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var a;


//Timer function
function start() {
  console.log(time.value)
if (minutes.innerHTML =="00" && seconds.innerHTML=="00" && time.value>0){
    var timeInput = time.value;
    var miliseconds = (time.value)*60000;
    minutes.innerHTML=timeInput;

//Timer Interval
  var timer =   setInterval(function() {
      if (minutes.innerHTML== 0 && seconds.innerHTML == 0) {
          clear();
      }

      else if (seconds.innerHTML==="00" || seconds.innerHTML == 0) {
          minutes.innerHTML-=1;
          seconds.innerHTML = 59;
      }
      else {
        seconds.innerHTML -=1;

      }



    }, 1000);

  // Clear InterVal
  function clear() {
      clearInterval(timer);
      minutes.innerHTML = "00";
      seconds.innerHTML = "00";

  }
}
}

//Reset function
function startOver() {
  console.log("d");
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";


}







//Event Listeners
play.addEventListener("click", start);
reset.addEventListener("click", startOver);
}
