const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("open");
};

const sr = ScrollReveal({
  distance: "30px",
  duration: 1000,
  reset: true,
});

sr.reveal(
  ".home-text, .container, .categorias, .cursos, .cta, .about, .contact",
  {
    delay: 280,
    origin: "bottom",
  }
);

sr.reveal(".home", {
  delay: 200,
  origin: "bottom",
});
