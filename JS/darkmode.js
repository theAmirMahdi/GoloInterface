let switchElement = document.querySelector(".switch");
let containerElem = document.querySelector(".container");
let asideElem = document.querySelector(".aside");
let taskColumnElem = document.querySelectorAll(".column-header");
let profileElems = document.querySelectorAll(".task-box-comment .profile img");
let svgPaths = document.querySelectorAll("svg path.stroked");
let svgFill = document.querySelector("svg path.filled");
let pTagBG = document.querySelectorAll(".counter");
let taskAreaElem = document.querySelector(".task-area");
let funcHeaderElem = document.querySelector(".func-header");
let headerElem = document.querySelector(".header");
let commentElems = document.querySelectorAll(".comment");

function toggleDarkMode() {
  containerElem.classList.toggle("dark");
  headerElem.classList.toggle("dark");
  asideElem.classList.toggle("dark");
  funcHeaderElem.classList.toggle("dark");
  taskAreaElem.classList.toggle("dark");

  taskColumnElem.forEach((elem) => {
    elem.classList.toggle("column-header-dark");
  });

  profileElems.forEach((elem) => {
    elem.classList.toggle("profile-dark");
  });

  svgPaths.forEach((path) => {
    path.classList.toggle("stroked-dark");
  });

  if (svgFill) {
    svgFill.classList.toggle("filled-dark");
  }

  pTagBG.forEach((p) => {
    p.classList.toggle("counter-dark");
  });

  commentElems.forEach((c) => {
    c.classList.toggle("dark");
  });

  if (containerElem.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

switchElement.addEventListener("click", toggleDarkMode);

window.onload = function () {
  let localStorageTheme = localStorage.getItem("theme");

  if (localStorageTheme === "dark") {
    toggleDarkMode();
  }
};
