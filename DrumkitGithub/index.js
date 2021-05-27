

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i < numberOfDrumButtons; i++){
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);  //event listener (on-click)
}

function playSound(indicator){
  switch (indicator) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3'); //tom-1 audio object
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3"); //tom-2 audio object
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3"); //tom-3 audio object
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3"); //tom-4 audio object
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3"); //snare audio object
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3"); //crash audio object
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3"); //kick-bass audio object
      kick.play();
      break;

    default: console.log(indicator);
  }
}


function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  if(document.querySelectorAll("." + currentKey).length !== 0){
    activeButton.classList.add("pressed");                                      //adds animation
    setTimeout(function() {activeButton.classList.remove("pressed");}, 100);    //times-out animation
  }
}

// handles instrument sound & animation for 'click'
function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  playSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

// handles instrument sound & animation for 'pressing key'
document.addEventListener("keydown", function(event) {
  playSound(event.key);
  buttonAnimation(event.key);
});
