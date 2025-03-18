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


let customMouseLight = document.querySelector(".custom-mouse-light");
let rect = customMouseLight.getBoundingClientRect();

customMouseLight.addEventListener("mousemove", function (e) {
  e.target.style.background = `radial-gradient(circle at ${e.clientX - rect.x}px ${e.clientY - rect.y}px, transparent, #080526 300px, #080526 100%)`;
});