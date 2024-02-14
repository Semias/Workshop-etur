// Funktion zum Extrahieren der ID aus der URL
function getIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// Funktion zum Abrufen und Anzeigen der Detaildaten
async function fetchAndDisplayDetails() {
  const id = getIdFromUrl();
  const apiUrl = `http://127.0.0.1:80/reports/${id}`; // URL anpassen, um Details zu erhalten
  const response = await fetch(apiUrl);
  const data = await response.json();

  const container = document.getElementById("details-container");
  // Daten anzeigen (angepasst an deine API-Antwort)
  container.innerHTML = `
  <div>${data.category}</div>
  <div>${data.label}</div>
  <h2>${data.id}</h2>
  <p>${data.description}</p>
  `;
}

fetchAndDisplayDetails();
