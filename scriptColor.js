// case 1
let button = document.getElementById("button");

button.addEventListener("click", () => {
  // document.getElementsByTagName("body")[0].style.backgroundColor = "salmon";
  // document.body.setAttribute("class", "salmon-color");

  // if u want toggle
  document.body.classList.toggle("salmon-color");
});

// case 2 - random color
let rColorButton = document.createElement("button");
rColorButton.appendChild(document.createTextNode("random color"));
rColorButton.setAttribute("type", "button");

button.after(rColorButton);

// rColorButton.onclick = () => {
//   document.body.style.backgroundColor = "lime";
// };

rColorButton.addEventListener("click", () => {
  document.body.style.backgroundColor = `rgb(${generateRandom()},${generateRandom()},${generateRandom()})`;
});

function generateRandom() {
  //  Math.floor(Math.random() * (max - min + 1) + min)
  let result = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  console.log(result);
  return result;
}

//case 3 - slider
let redSlider = document.querySelector("input[name=redSlider]");
let greenSlider = document.querySelector("input[name=greenSlider]");
let blueSlider = document.querySelector("input[name=blueSlider]");

redSlider.addEventListener("input", () => {
  let r = redSlider.value;
  let g = greenSlider.value;
  let b = blueSlider.value;

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

greenSlider.addEventListener("input", () => {
  let r = redSlider.value;
  let g = greenSlider.value;
  let b = blueSlider.value;

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

blueSlider.addEventListener("input", () => {
  let r = redSlider.value;
  let g = greenSlider.value;
  let b = blueSlider.value;

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// case 4 - cursor
document.body.addEventListener("mousemove", (e) => {
  // mouse Posisiton
  // console.log(e.clientX);

  // browser size
  // console.log(window.innerWidth);

  let xPos = Math.round((e.clientX / window.innerWidth) * 255);
  let yPos = Math.round((e.clientY / window.innerHeight) * 255);

  document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`;
});
