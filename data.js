var password=document.getElementById('password');
var flag=1;    //1-> true| 0-> false
function check(elem){
 if(elem.value.length>0){
    if(elem.value!=password.value){
        document.getElementById('alert').innerText="Please enter a correct password"
        flag=0;
    }else{
        document.getElementById('alert').innerText="" 
        flag=1;
    }
 }else{
     document.getElementById('alert').innerText="Please enter conform Password"
     flag=0;
 }
}
function validate(){
if(flag==1){
return true
}else{
return false
}
}
function up(){
let x=document.getElementById('frame');
x.value=x.value.toUpperCase();
}
function showTime(){
var d=new Date();
var h=d.getHours();
var m=d.getMinutes();
var s=d.getSeconds();
var session="AM"
if(h>12){
h=h-12
session="PM"
}
h=h<10?"0"+h:h
m=m<10?"0"+m:m
s=s<10?"0"+s:s
var time=h+":"+m+":"+s+":"+session;
document.getElementById('time').innerText=time
setTimeout(showTime,1000);


}
