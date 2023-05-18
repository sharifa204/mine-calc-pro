//IIFE
// immegitally invoke function expression
// those function which are run
// automitacly when we lunch aproject

(function () {
  // targiting the screen has class screen
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  // console.log(screen);
  console.log(buttons);
  // console.log(clear);
  // console.log(equal);
  //first functionality
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let userInput = e.target.dataset.num;
      screen.value += userInput;
    });
  });
  // second functionality
  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "";
      console.log("equal button clicked");
    } else {
      // eval evaluate mathmatical operation
      let answer = eval(screen.value);

      screen.value = answer;
    }
  });
})();
