var colors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var started = false;

$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  // console.log(userClickedPattern);
  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);
});


$(document).keydown(function() {
  if (!started) {
    $("#level-title").text = ("level" + level);
    nextSequence();
    started = true;

  }
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {


      setTimeout(function() {
        nextSequence();
      }, 1000);

    }

  } else {
    playSound(wrong);


    $("#level-title").text=("Game Over, Press Any Key to Restart");
    console.log("wrong");

    $("body").addClass(".game-over");
    setTimeout(function(){
      $("body").removeClass(".game-over");
    },200)
    startover();
  }

}


function nextSequence() {

  level++;;
  $("#level-title").text = ("level" + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = colors[randomNumber];
  gamePattern.push(randomChosenColor);
  playSound(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


function startover(){
  level =0;
  var gamePattern = [];
  started=false;
}
