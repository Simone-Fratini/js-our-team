"use strict";
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

const cardContainer = document.getElementById("card-container");
let addForm = document.getElementById("add-form");


startupPage();

function startupPage() {

  teamMembers.forEach((member) => {
    addCard(member.name, member.role, member.email, member.img);
  });
}

function addCard(name, role, email, imgSrc) {
  const cardTemplate = `
        <div class="col-12 col-md-6 col-lg-3 mb-4">
          <div class="card">
            <img src="${imgSrc}" class="card-img-top" alt="${name}">
            <div class="card-body text-center">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${role}</p>
              <p class="card-text my-font">${email}</p>
              <button class="btn btn-primary trash-button">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      `;
  cardContainer.innerHTML += cardTemplate;
}

// Evento per rimuovere le card
document.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("trash-button") ||
    event.target.closest(".trash-button")
  ) {
    const cardColumn = event.target.closest(".col-12");
    cardColumn.remove();
  }
});

document.addEventListener("submit", (event) => {
  event.preventDefault();

  let nameSurname = document.getElementById("name-surname").value;
  let jobRole = document.getElementById("dropdown").value;
  let email = document.getElementById("inputEmail").value;
  let fileInput = document.getElementById("file-form");

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();


    reader.onload = function (e) {
      const imgSrc = e.target.result;
      addCard(nameSurname, jobRole, email, imgSrc);
    };


    reader.readAsDataURL(fileInput.files[0]);
  }
});






