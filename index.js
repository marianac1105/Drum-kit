for (n = 0; n < document.querySelectorAll(".drum").length; n++) {
  document.querySelectorAll("button")[n].addEventListener("click", function() {
    var buttoninnerHTML = this.innerHTML

    makeSound(buttoninnerHTML);
    buttonAnimation(buttoninnerHTML);




  })

}

document.addEventListener("keydown", function(e) {
  var keyPressed = e.key
  makeSound(keyPressed)
  buttonAnimation(keyPressed)
})


function makeSound(key) {

  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3")
      crash.play()

      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3")
      kick.play()

    case "s":
      var snare = new Audio("sounds/snare.mp3")
      snare.play()

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3")
      tom1.play()

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3")
      tom2.play()

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3")
      tom3.play()

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3")
      tom4.play()

    default:
      console.log("Drum")

  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")

  }, 100)

}
//var sound = new Audio('sounds/tom-1.mp3');
//sound.play();
