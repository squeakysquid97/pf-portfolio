window.onload = function () {
  if (localStorage.darkMode === "true") {
    setDarkMode();
  }
};

let documentText = document.querySelector("body > div");
let mainDocument = document.querySelector("body");
let skillIcon = document.querySelector("body > div > section.skills > div");
let lightModeButton = document.querySelector(".lightModeButton");
let darkMode = localStorage.getItem("darkMode");

document.querySelector("body > div > section.skills");

function setDarkMode() {
  mainDocument.style.backgroundColor = "black";
  documentText.style.color = "white";
  localStorage.setItem("darkMode", "true");
  skillIcon.classList.add("skillDark");
  lightModeButton.innerHTML = "LightMode";
}

function setLightMode() {
  mainDocument.style.backgroundColor = "white";
  documentText.style.color = "black";
  localStorage.setItem("darkMode", "false");
  lightModeButton.innerHTML = "DarkMode";
  skillIcon.classList.remove("skillDark");
}

toggleDarkMode = () => {
  if (localStorage.darkMode === "true") {
    setLightMode();
  } else {
    setDarkMode();
  }
};

lightModeButton.addEventListener("click", toggleDarkMode);
