const html = document.querySelector("html");
const themeButton = document.querySelector(".theme-switcher");
html.setAttribute("theme", "dark");

themeButton.addEventListener("click", () => {
  if (html.getAttribute("theme") === "dark") {
    html.setAttribute("theme", "light");
  } else if (html.getAttribute("theme") === "light") {
    html.setAttribute("theme", "dark");
  }
});
