document.querySelectorAll(".drum").forEach(item => {
  item.addEventListener('click', event => {
    playSound(item.textContent);
    buttonAnimation(item.textContent);
  });
});

document.addEventListener("keydown", function(event){
    playSound(event.key);
    buttonAnimation(event.key);
});

function playSound(key){
  switch(key){
    case "w":
    case "W":
    var wDrum = new Audio("sounds/tom-1.mp3");
    wDrum.play();
    break;

    case "a":
    case "A":
    var aDrum = new Audio("sounds/tom-2.mp3");
    aDrum.play();
    break;

    case "s":
    case "S":
    var sDrum = new Audio("sounds/tom-3.mp3");
    sDrum.play();
    break;

    case "d":
    case "D":
    var dDrum = new Audio("sounds/tom-4.mp3");
    dDrum.play();
    break;

    case "j":
    case "J":
    var jDrum = new Audio("sounds/snare.mp3");
    jDrum.play();
    break;

    case "k":
    case "K":
    var kDrum = new Audio("sounds/crash.mp3");
    kDrum.play();
    break;

    case "l":
    case "L":
    var lDrum = new Audio("sounds/kick-bass.mp3");
    lDrum.play();
    break;
  }
}

function buttonAnimation(currentKey){
  var activeButton =  document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
