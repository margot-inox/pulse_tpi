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