const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

//When ever the computed property is been calculated
// backgroundColor: #FFF
const getBGColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};

// console.log(getBGColor(pink));

// var color = getBGColor(pink);

// pink.addEventListener("mouseenter", () => {
//   center.style.background = color;
// });

const magicColorChanger = (element, color) => {
  return element.addEventListener("mouseenter", () => {
    center.style.background = color;
  });
};

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(orange, getBGColor(orange));
