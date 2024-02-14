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

//Get Reports
function getReports() {
  fetch("http://127.0.0.1:80/reports/customer/1234")
    .then((response) => {
      // Überprüfe, ob die Anfrage erfolgreich war
      if (!response.ok) {
        throw new Error("Netzwerkantwort war nicht ok");
      }
      return response.json(); // Parse die Antwort als JSON
    })
    .then((data) => {
      const reportCardsContainer = document.querySelector(".report-cards");
      const renderedContent = data
        .map((item) => {
          return `            
          <div class="report-card">
          <a href="./details.html?id=${item.id}" class="report-card-link">
          <div class="report-card-header">
            <div class="report-card-id">            
            ${item.id}
            </div>
            <div class="report-card-chips">
              <div class="report-card-category chip">${item.category}</div>
              <div class="report-card-state chip">${item.state}</div>
            </div>
          </div>
          <div class="report-card-body">
            <div class="report-card-description">
              <p>
                ${item.description}
              </p>
            </div>
          </div>
          </a>
        </div>`;
        })
        .join("");

      reportCardsContainer.innerHTML = renderedContent;
    })
    .catch((error) => {
      console.error("Es gab ein Problem mit dem Fetch-Operation:", error);
    });
}

getReports();

// function cardClickedHandler() {
//   const reportCard = document.querySelectorAll(".report-cards .report-card");

//   reportCard.forEach((card) => {
//     card.addEventListener("click", () => {
//       //   console.log("Card clicked");
//       //   window.location.href = `./details.html?id=${item.id}`;
//     });
//   });
// }

// setTimeout(() => {
//   cardClickedHandler();
// }, 1000);
