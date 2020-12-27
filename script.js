function displayChange(){
    var refrate=1000;
    myTime = setTimeout("displayTime()",refrate);
}

function amorpm(){
    var today = new Date();
    var noon  = 12;
    if(today.getHours() >= noon)
    { 
       return("PM");
    } 
    else {
       return("AM");
    }
}
amorpm();
function displayTime(){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() +" "+  amorpm();
    document.getElementById("time").innerHTML = time; 
    displayChange();
}


function myFunction(){
    var x = document.getElementById("wakeUpRing").selectedIndex;
    var a = document.getElementsByTagName("option")[x].value;
    document.getElementById(a).play();
    
}


function myFunction1(){
    var x = document.getElementById("wakeUpRing").selectedIndex;
    var a = document.getElementsByTagName("option")[x].value;
    document.getElementById(a).pause();
    
}
