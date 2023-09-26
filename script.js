var hr=0;
 var min=0;
var sec=0;
var count=0;
var timer = false;
function tra(){
    timer=true;
    stopwatch();


}
function pot(){
     timer = false;
}
function tart(){
timer=false;
hr=0
min=0
sec=0
count=0
document.getElementById("count").innerHTML=0;
document.getElementById("h1").innerHTML=0;
    document.getElementById("m1").innerHTML=0;
    document.getElementById("Sec").innerHTML=0;
}
function stopwatch(){
    if(timer == true){
    count = count+1;
    if(count == 100){
        sec = sec+1;
        count=0;
    }if(sec == 60){
        min = min+1;
        sec=0;
    }
    if(min ==60){
        hr = hr+1;
        min =0;

    }
    document.getElementById("h1").innerHTML=hr;
    document.getElementById("m1").innerHTML=min;
    document.getElementById("Sec").innerHTML=sec;
    document.getElementById("count").innerHTML=count;
    setTimeout("stopwatch()" ,10);

}
}
