window.onload = function () {
  if (localStorage.darkMode === "true") {
    darkBySystem();
  }

  if (localStorage.darkMode === "true") {
    console.log(localStorage.darkMode);
  } else {
    console.log(localStorage.darkMode, "darkBySystem has not run");
  }
};

let documentText = document.querySelector("body > div");
let mainDocument = document.querySelector("body");
let skillIcon = document.querySelector("body > div > section.skills > div");
let lightModeButton = document.querySelector(".lightModeButton");
let darkMode = localStorage.getItem("darkMode");

document.querySelector("body > div > section.skills");

function darkBySystem() {
  console.log(darkMode);
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    mainDocument.style.backgroundColor = "black";
    documentText.style.color = "white";
    localStorage.setItem("darkMode", "true");
    skillIcon.classList.add("skillDark");
  }
}

function setLightMode() {
  mainDocument.style.backgroundColor = "white";
  documentText.style.color = "black";
  localStorage.setItem("darkMode", "false");
  lightModeButton.innerHTML = "DarkMode";
  skillIcon.classList.remove("skillDark");
}

lightModeButton.addEventListener("click", setLightMode);
