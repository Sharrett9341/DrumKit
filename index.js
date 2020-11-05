//Detecting Buttonpress

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}
//Detecting Keyboard
document.addEventListener("keypress", function () {
  makeSound(event.key);

  buttonAnimation(event.key);
});
var synth1 = new Audio("sounds/synth-1.mp3");
      
var synth2 = new Audio("sounds/synth-2.mp3");
var synth3 = new Audio("sounds/synth-3.mp3");
var synth4 = new Audio("sounds/synth-4.mp3");
var kick = new Audio("sounds/kick-1.mp3");
var snare = new Audio("sounds/snare-1.mp3");
var rimshot1 = new Audio("sounds/rimshot-1.mp3");
var highHat2 = new Audio("sounds/high-hat-2.mp3");
var clap1 = new Audio("sounds/clap-1.mp3");
var kick = new Audio("sounds/kick-bass.mp3");
var openHat= new Audio("sounds/open-hat.mp3");
var tom = new Audio("sounds/tom-1.mp3");
var bass = new Audio("sounds/bass.mp3");
var synth5 = new Audio("sounds/synth-5.mp3");
var ride1 = new Audio("sounds/ride-1.mp3");
var ride2 = new Audio("sounds/ride-2.mp3");

function makeSound(key) {
  switch (key) {
    case "w":
      synth1.play();
      break;

    case "a":;
      synth2.play();
      break;

    case "s":
      synth3.play();
      break;

    case "d":
      synth4.play();
      break;

    case "c":
      kick.play();
      break;

    case "j":
      snare.play();
      break;

    case "k":
      rimshot1.play();
      break;

    case "l":
      highHat2.play();
      break;

   
      case "e":
      clap1.play();
      break;

    case "r":
      kick.play();
      break;

    case "t":
      openHat.play();
      break;

    case "y":
      tom.play();
      break;

    case "v":
      bass.play();
      break;

    case "b":
      synth5.play();
      break;
      

    case "n":
      ride1.play();
      break;

    case "m":
      ride2.play();
      break;
          
          


    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
