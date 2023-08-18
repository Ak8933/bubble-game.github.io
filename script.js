var timer=60;
var score = 0;
var hitv;


function increaseScore(){
    score+=10;
    document.getElementById('score').textContent = score;
}


function hitit(){
   hitv = Math.floor(Math.random()*10);
   document.getElementById('hitval').innerHTML=hitv;
}


function makeBubble(){
    var bub ="";
    for(var i=1;i<=152;i++){
       var num = Math.floor(Math.random()*10);
       bub += `<div class="bubble">${num}</div>`;
    }
    document.getElementsByClassName("pbtm")[0].innerHTML = bub;
}


function runtimer(){
    var temp = setInterval(function(){
    if(timer>0){
        timer--;
        document.getElementById("tym").innerHTML = timer;
    }
    else{
        clearInterval(temp) ;
        document.querySelector("#ptm").innerHTML=`Your score is : ${score}`;
        document.getElementById
    }
   },1000);

}

document.querySelector('#ptm').addEventListener('click',function(dets){
    var clickednum = Number(dets.target.textContent);
        if(clickednum===hitv){
            increaseScore();
            makeBubble();
            hitit();
        }
        
});

makeBubble();
hitit();
runtimer();






