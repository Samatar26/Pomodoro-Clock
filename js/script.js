window.onload = function() {
//Initial Variable Declarations
var play = document.getElementById("play");
var reset = document.getElementById("reset");
var time = document.getElementById("timerInput");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var breaks = document.getElementById("breakLength");
var timeInput;
var changer;
var alt = "reset";
//Timer function
function start() {
  var timeInput = time.value;
  var breakLength = breaks.value;
if (minutes.innerHTML ==="00" && seconds.innerHTML==="00" && time.value>0 && breaks.value>0){

    var miliseconds = (time.value)*60000;

    changer = changer === timeInput ? breakLength : timeInput;
    minutes.innerHTML = changer;
    console.log(changer);
    console.log(breakLength);

//Timer Interval
  var timer =   setInterval(function() {


      if (minutes.innerHTML== 0 && seconds.innerHTML == 0) {
        (function clear() {

            clearInterval(timer);
            minutes.innerHTML = "00";
            seconds.innerHTML = "00";
            start();
            console.log("Loop");

        }());
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

}
}




function stopTimer() {
    minutes.innerHTML="00";
    seconds.innerHTML ="00";
    time.value=0;
    breaks.value=0;
    changer=0;
    start();
}


//Event Listeners
play.addEventListener("click", start);
reset.addEventListener("click", stopTimer);
}
