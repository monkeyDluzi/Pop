
const welcome = document.getElementById("welcome");
const difficulty = document.getElementById("diff");
const startButton = document.getElementById("click");
const ez = document.getElementById("ez");
const arena = document.getElementById("arena");


startButton.addEventListener("click", function() {
  welcome.style.display = "none";
  difficulty.style.display = "block";
});

