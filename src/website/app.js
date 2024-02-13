const inputFirstName = document.getElementById("fName");
const inputLastName = document.getElementById("lName");
const inputCheck = document.getElementById("check");
const outputParagraph = document.querySelector(".check-numbers p"); // Referenz auf das <p>-Element
const submitButton = document.querySelector(".submit-form .cta-button");

//Create Customer
submitButton.addEventListener("click", function () {
  const firstNameValue = document.getElementById("fName").value;
  const LastNameValue = document.getElementById("lName").value;

  const data = {
    firstName: firstNameValue,
    lastName: LastNameValue,
  };

  fetch("http://127.0.0.1:3000/customers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log("Erfolg:", data))
    .catch((error) => console.error("Fehler:", error));

  inputFirstName.value = "";
  inputLastName.value = "";
});

//Get Customers
function getCustomers() {
  fetch("http://127.0.0.1:3000/customers")
    .then((response) => {
      // Überprüfe, ob die Anfrage erfolgreich war
      if (!response.ok) {
        throw new Error("Netzwerkantwort war nicht ok");
      }
      return response.json(); // Parse die Antwort als JSON
    })
    .then((data) => {
      //   console.log(data); // Hier kannst du mit den Daten arbeiten
      let cards = document.querySelector(".customer-cards");

      data.forEach((element) => {
        const card = document.createElement("div");
        const cardNumber = document.createElement("p");
        const cardName = document.createElement("p");
        card.classList.add("customer-card");
        cardNumber.classList.add("card-number");
        cardName.classList.add("card-name");

        cardName.textContent = element.firstName + " " + element.lastName;
        cardNumber.textContent = element.id;

        cards.appendChild(card);
        card.appendChild(cardName);
        card.appendChild(cardNumber);
      });
    })
    .catch((error) => {
      console.error("Es gab ein Problem mit dem Fetch-Operation:", error);
    });
}
getCustomers();

// function searchCustomer() {}

//Search Number
const searchSubmit = document.querySelector(".check-numbers .cta-button");
searchSubmit.addEventListener("click", () => {
  const searchIdValue = document.getElementById("check").value;

  fetch(`http://127.0.0.1:3000/customers/${searchIdValue}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Netzwerkantwort war nicht ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Erfolg:", data);
      outputParagraph.style.color = "green";
      outputParagraph.style.display = "block";
      outputParagraph.textContent = "ID exists!";
    })
    .catch((error) => console.error("Fehler:", error))
    .then(
      (outputParagraph.textContent = "Doesnt exist.")(
        (outputParagraph.style.color = "red")(
          (outputParagraph.style.display = "block")
        )
      )
    );

  inputCheck.value = "";
});
