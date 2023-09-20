const loadText = document.querySelector(".loading-text");
const backgroundImage = document.querySelector(".bg");

let load = 0;
let opac = 1;
console.log(backgroundImage.style);
let int = setInterval(blur, 30);
function blur() {
  load++;

  if (load == 100) {
    clearInterval(int);
  }
  // trial and error approach
  //   opac -= 0.01;
  //   backgroundImage.style.filter = `blur(${100 - load}px)`;
  //   loadText.style.opacity = opac;

  // scaling numbers approach
  loadText.textContent = load + "%";
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  backgroundImage.style.filter = `blur(${scale(load, 0, 100, 50, 0)}px)`;

  //   console.log(scale(load, 0, 100, 1, 0));
  //   console.log(scale(load, 100, 0, 0, 100));
  //   console.log(load);
}
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
