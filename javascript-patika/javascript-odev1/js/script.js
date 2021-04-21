const nameDOM = document.querySelector(".name");
const clockDOM = document.querySelector(".clock");
const dayDOM = document.querySelector(".day");

const daysInTurkish = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

function updateDOM() {
  getName();
  updateDate();
}

function getName() {
  let name = prompt("Adınız nedir?").trim();
  if (name) {
    name += "!";
    nameDOM.innerText = name;
  }
}

function updateDate() {
  const current = new Date();
  clockDOM.innerText = current.toTimeString().slice(0, 8);
  dayDOM.innerText = daysInTurkish[current.getDay()];
  setTimeout(updateDate, 1000);
}

updateDOM();
