// ---------- BURGER MENU ----------
let burgerMenuIcon = document.querySelector('.to-open');
let xMenuIcon = document.querySelector('.to-close');
let openedBurgerMenu = document.querySelector('.opened-burger-menu');
let menuLinks = document.querySelectorAll('.opened-burger-menu a');

function toggleMenu(open) {
    openedBurgerMenu.style.transform = open ? "translateY(0)" : "translateY(-100%)";
    burgerMenuIcon.style.display = open ? "none" : "block";
    xMenuIcon.style.display = open ? "block" : "none";
}

burgerMenuIcon.addEventListener("click", () => toggleMenu(true));
xMenuIcon.addEventListener("click", () => toggleMenu(false));

menuLinks.forEach(link => {
    link.addEventListener("click", () => toggleMenu(false));
});


// ---------- CUSTOM MOUSSE HERO HEADER ----------
let customMouseLight = document.querySelector(".custom-mouse-light");
let rect = customMouseLight.getBoundingClientRect();

customMouseLight.addEventListener("mousemove", function (e) {
  e.target.style.background = `radial-gradient(circle at ${e.clientX - rect.x}px ${e.clientY - rect.y}px, transparent, #080526 300px, #080526 100%)`;
});


// ---------- COUNTDOWN ----------
function updateCountdown() {
  const targetDate = new Date(2025, 6, 19, 8, 0, 0);
  const now = new Date();
  const timeLeft = targetDate - now;
  let daysDom = document.querySelector('.days');
  let hoursDom = document.querySelector('.hours');
  let minutesDom = document.querySelector('.minutes');
  let secodnsDom = document.querySelector('.seconds');

  const days = Math.floor(timeLeft / (1000*60*60*24));
  const hours = Math.floor((timeLeft % (1000*60*60*24))/(1000*60*60));
  const minutes = Math.floor((timeLeft % (1000*60*60))/(1000*60));
  const seconds = Math.floor((timeLeft % (1000*60))/1000);

  daysDom.innerHTML = days;
  hoursDom.innerHTML = hours;
  minutesDom.innerHTML = minutes;
  secodnsDom.innerHTML = seconds;
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);


// ---------- MONTANT CUSTOM POUR FORMULAIRE DON ----------
const autreRadio = document.getElementById("autre");
const montantPerso = document.getElementById("montantPerso");

montantPerso.addEventListener("focus", function() {
  autreRadio.checked = true;
});

montantPerso.addEventListener("input", function() {
  autreRadio.value = montantPerso.value ;
});


// ---------- DEFAULT MONTANT DIFFERENTS SI DON UNIQUE OU MENSUEL  ----------
function updateMontants() {
  let soutienMensuel = document.getElementById('mensuel').checked;
  let montantCinquante = document.getElementById('cinquante');
  let montantCent = document.getElementById('cent');
  let montantCentcinquante = document.getElementById('centcinquante');
      
      // Si soutien mensuel, on ajuste les valeurs
  if (soutienMensuel) {
    montantCent.nextElementSibling.textContent = '30 CHF';
    montantCinquante.nextElementSibling.textContent = '15 CHF';
    montantCinquante.value = 'quinze';
    montantCentcinquante.nextElementSibling.textContent = '50 CHF';
    montantCentcinquante.value = 'cinquante';
    montantCent.value = 'trente';
  } else {
    montantCent.nextElementSibling.textContent = '100 CHF';
    montantCinquante.nextElementSibling.textContent = '50 CHF';
    montantCinquante.value = 'cinquante';
    montantCentcinquante.nextElementSibling.textContent = '150 CHF';
    montantCentcinquante.value = 'centcinquante';
    montantCent.value = 'cent';
  }
}

document.getElementById('unique').addEventListener('change', updateMontants);
document.getElementById('mensuel').addEventListener('change', updateMontants);
updateMontants();