let [seconds,minuts,hours] = [0,0,0],
    displayTime = document.getElementById("display"),
    timer = null;

function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minuts++;
        if(minuts == 60){
            minuts = 0;
            hours++;
        }
    }
    let h = (hours<10) ? "0" + hours : hours;
    let m = (minuts<10) ? "0" + minuts : minuts;
    let s = (seconds<10) ? "0" + seconds : seconds;
    displayTime.innerHTML = h + ":" + m + ":" + s;
}
function start(){
    if (timer != null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch,1000);
}
function pausTimer(){
    clearInterval(timer)
}
function resetTimer(){
    clearInterval(timer);
    [seconds,minuts,hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}