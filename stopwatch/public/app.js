var second = 0
var minutes = 0
var hour = 0
var Dsecond = 0
var Dminutes = 0
var Dhour = 0

var interval =null;
var status ="stop"

function stopWatch() {
    console.log("inside")
    second++;

    if (second / 60 === 1) {
        second = 0;
        minutes++;
        if (minutes / 60 == 1) {
            minutes = 0;
            hour++;
        }
    }

    if (second < 10) {
        Dsecond = "0" + second.toString();
    }
    else {
        Dsecond = second;
    }
    if (minutes < 10) {
        Dminutes = "0" + minutes.toString();
    } else {
        Dminutes = minutes
    }
    if (hour < 10) {
        Dhour = "0" + hour.toString();
    } else {
        Dhour = hour
    }


    //set display
    document.getElementById("display").innerHTML = Dhour + ":" + Dminutes + ":" + Dsecond



}


function startorstop(){
      
    if(status==="stop"){
    interval=window.setInterval(stopWatch, 1000);
    document.getElementById("startorstop").innerHTML="Stop";
    status="start"
    }
     else{
         window.clearInterval(interval);
         document.getElementById("startorstop").innerHTML="Start";
         status="stop"
         

     }


}

function reset(){
    document.getElementById("display").innerHTML= "00"+ ":"+"00"+ ":"+"00"
}