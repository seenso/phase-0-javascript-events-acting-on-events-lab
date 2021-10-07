// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
};

//want to keep using the left property to move the dodger right.
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  
  //dodger is 40px wide per the css file
  //the game is 400px wide
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
};

document.addEventListener("keydown", function (event) {
  if (event.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (event.key === 'ArrowRight') {
    moveDodgerRight();
  }
});