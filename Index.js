
document.querySelector(".btn").addEventListener("click", line_game);

  document.querySelector(".div2").addEventListener("click", result);
  function result(){
    let successSound = new Audio("success.mp3");
    successSound.play();
    // alert("You pass the test.");
   }

for(i=1; i<7; i++){
  document.querySelector(".btn"+i).addEventListener("mouseenter", givingAlert);
  function givingAlert(){
    // let failSound = new Audio("sound.mp3")
    // failSound.play();
    alert("you touched the green area. Try again.");
    return 0;
  }
}

function line_game(){

  var divWidth = Math.floor(Math.random()*870);
  document.querySelector(".first_left").style.width = divWidth + "px";
  var divWidth2 = 950 - divWidth + 5;
  document.querySelector(".first_right").style.width = divWidth2 + "px";
  var divWidth3 = Math.floor(Math.random()*400) + 200 ;
  document.querySelector(".second_left").style.width = divWidth3 + "px";
  var divWidth4 = 770 - divWidth3;
  document.querySelector(".second_right").style.width = divWidth4 + "px";
  var divWidth5 = Math.floor(Math.random()*870);
  document.querySelector(".third_left").style.width = divWidth5 + "px";
  var divWidth6 = 950 - divWidth5 + 5;
  document.querySelector(".third_right").style.width = divWidth6 + "px";

return 0;
}
