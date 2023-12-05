var timer=60;
var score=0;
var hitrn=0; 
// 


function increaseScor(){
    score +=10;
    document.querySelector("#Scoreval").textContent=score;

}
function getNewHit(){
     hitrn=Math.floor(Math.random() *10);
    document.querySelector("#hitval").textContent=hitrn;
     
}
function makebubble(){
var clutter=""; 
for(var i=0;i<=167;i++){
     var rn=Math.floor(Math.random()*10)
   clutter +=` <div class="bubble">${rn}</div>`;
}
document.querySelector("#pbuttom").innerHTML=clutter;
}

function runTimer(){
var timerint=setInterval(function(){
if(timer>0){
    timer--;
document.querySelector("#Timeraval").textContent=timer;
}
else{
    clearInterval(timerint);
    document.querySelector("#pbuttom").innerHTML=`<h1>Apka Game  Samapat hua </h1>`;
}
},1000);
}
document.querySelector("#pbuttom").addEventListener("click",function(dets){
var clickedNum=(Number(dets.target.textContent));
if(clickedNum == hitrn){
    increaseScor();
    makebubble();
    getNewHit();
}
})

runTimer();
makebubble();
getNewHit();
