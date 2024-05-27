let switchElement = document.querySelector(".switch");
let containerElem = document.querySelector(".container");
let asideElem = document.querySelector(".aside");
let taskColumnElem = document.querySelectorAll(".column-header");
let profileElems = document.querySelectorAll(".task-box-comment .profile img");
let svgPaths = document.querySelectorAll("svg path.stroked");
let svgFill = document.querySelector("svg path.filled");
let pTagBG = document.querySelectorAll(".counter");

switchElement.addEventListener("click", function () {
  containerElem.classList.toggle("dark");
  asideElem.classList.toggle("dark");
  taskColumnElem.forEach((elem) => {
    elem.classList.toggle("column-header-dark");
  });

  profileElems.forEach((elem) => {
    elem.classList.toggle("profile-dark");
  });

  svgPaths.forEach((path) => {
    path.classList.toggle("stroked-dark");
  });

  svgFill.classList.toggle("filld-dark");

  pTagBG.forEach((p) => {
    p.classList.toggle("counter-dark");
  });

  if (containerElem.className.includes("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

window.onload = function () {
  let localStorageTheme = localStorage.getItem("theme");

  if (localStorageTheme === "dark") {
    document.body.classList.toggle("dark");
  }
};
