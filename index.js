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

function makeSound(key) {
  switch (key) {
    case "w":
      var synth1 = new Audio("sounds/synth-1.mp3");
      synth1.play();
      break;

    case "a":
      var synth2 = new Audio("sounds/synth-2.mp3");
      synth2.play();
      break;

    case "s":
      var synth3 = new Audio("sounds/synth-3.mp3");
      synth3.play();
      break;

    case "d":
      var synth4 = new Audio("sounds/synth-4.mp3");
      synth4.play();
      break;

    case "c":
      var kick = new Audio("sounds/kick-1.mp3");
      kick.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare-1.mp3");
      snare.play();
      break;

    case "k":
      var rimshot1 = new Audio("sounds/rimshot-1.mp3");
      rimshot1.play();
      break;

    case "l":
      var highHat2 = new Audio("sounds/high-hat-2.mp3");
      highHat2.play();
      break;

   
      case "e":
      var clap1 = new Audio("sounds/clap-1.mp3");
      clap1.play();
      break;

    case "r":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "t":
      var openHat= new Audio("sounds/open-hat.mp3");
      openHat.play();
      break;

    case "y":
      var tom = new Audio("sounds/tom-1.mp3");
      tom.play();
      break;

    case "v":
      var bass = new Audio("sounds/bass.mp3");
      bass.play();
      break;

    case "b":
      var synth5 = new Audio("sounds/synth-5.mp3");
      synth5.play();
      break;
      

    case "n":
      var ride1 = new Audio("sounds/ride-1.mp3");
      ride1.play();
      break;

    case "m":
      var ride2 = new Audio("sounds/ride-2.mp3");
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
