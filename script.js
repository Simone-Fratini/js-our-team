"use strict";
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const cardContainer = document.getElementById("card-container");

console.log("ciao");

startupPage();

function startupPage() {
  // Generazione delle card
  teamMembers.forEach(member => {
    const cardTemplate = `
    <div class="col-12 col-md-6 col-lg-3 mb-4">
      <div class="card">
        <img src="${member.img}" class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">${member.name}</h5>
          <p class="card-text">${member.role}</p>
          <button class="btn btn-primary trash-button">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  `;
    cardContainer.innerHTML += cardTemplate;
  });


  document.addEventListener("click", event => {


    // Verifica se l'elemento cliccato ha la classe "trash-button"
    if (event.target.classList.contains("trash-button") || event.target.closest(".trash-button")) {
      // Trova l'elemento più vicino con la classe colonna
      const cardColumn = event.target.closest(".col-12");
      cardColumn.remove();
    }
  });
}




