const btn = document.querySelector("button");
const span = document.querySelector("span");
const main = document.querySelector("main");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];

btn.addEventListener("click", () => {
  let hexCode = "#";
  for (let index = 0; index < 6; index++) {
    hexCode += hex[hexCodeGenerator()];
  }
  main.style.backgroundColor = hexCode;
  span.innerText = hexCode;
});

function hexCodeGenerator() {
  return Math.floor(Math.random() * hex.length);
}
