var rNumber, counter, right=5;
var startBtn = document.getElementById('startBtn');
var findBtn = document.getElementById('findBtn');
var number = document.getElementById('number');
var showRight = document.getElementById('showRight')
var restartBtn = document.getElementById('restartBtn');
var showCounter = document.getElementById('showCounter');
number.addEventListener('keyup',function(e){
    if (e.keyCode === 13) {
    findBtn.onclick();
  }
});

showRight.innerHTML = 'You have '+right+' rights';

startBtn.onclick = function(){
    startBtn.style.background = 'green'
    startBtn.style.color = 'white'
    findBtn.disabled = false;
    number.disabled = false;
    rNumber = Math.floor(Math.random()*100);
    counter = 0;
}
findBtn.onclick = function(){
    counter++
    if(rNumber!=number.value && counter==right ){
        alert('Sorry you lost');
        findBtn.disabled = true;
        startBtn.disabled = true;
        number.disabled = true;
        restartBtn.style.display = 'initial'
    }
    if(number.value==rNumber){
        alert('Congratulations you win. Number was '+rNumber);
        restartBtn.style.display = 'initial'
    }else if(number.value>rNumber){
        alert('Please write smaller number')
    }else{
        alert('Please write bigger number')
    }
    
    var left = right-counter;
    showCounter.innerHTML = 'You have '+left+' rights left'
    
}






















// startBtn.onclick = function(){
//     findBtn.disabled = false;
//     rNumber = Math.floor(Math.random()*100);
//     counter = 0;
// }
// findBtn.onclick = function(){
//     counter++;
//     if(rNumber!=number.value && counter>=right){
//         window.alert('Sorry you used your rights')
//         findBtn.disabled = true;
//     }
//     if(rNumber==number.value){
//         alert('Congratulations. You found number')
//     }else if(number.value>number.value){
//         alert('Write smaller number')
//     }else{
//         alert('Write bigger number')
//     }
// }