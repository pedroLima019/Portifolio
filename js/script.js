document.getElementById("menu-toggle").addEventListener("click", function () {
  const menuContainer = document.getElementById("menu");
  menuContainer.classList.toggle("active");
});

const textContainer = document.querySelector(".text-container p");
const fullText =
  "Olá, eu sou o <strong>Pedro Lima.</strong> Desenvolvedor de Software.";
let charIndex = 0;

function typeText() {
  textContainer.innerHTML = fullText.substring(0, charIndex);
  charIndex++;

  if (charIndex <= fullText.length) {
    setTimeout(typeText, 60);
  }
}

typeText();

document.addEventListener("DOMContentLoaded", () => {
  const activeBar = document.querySelector(".active-bar");

  function updateBarWidth() {
    const scrollPercentage =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
      100;
    activeBar.style.width = `${Math.min(scrollPercentage, 100)}%`;
  }

  window.addEventListener("scroll", updateBarWidth);
  updateBarWidth();
});

ScrollReveal().reveal('.img-container', { delay: 500 });
ScrollReveal().reveal('.text-container', { delay: 500 });
ScrollReveal().reveal('.about-title', { delay: 500 });
ScrollReveal().reveal('.about-text', { delay: 500 });
ScrollReveal().reveal('.social-media', { delay: 500 });
ScrollReveal().reveal('.about-img', { delay:500 });
ScrollReveal().reveal('.experience-title', { delay: 500 });
ScrollReveal().reveal('.box', { delay: 500 });
ScrollReveal().reveal('.techs-title', { delay: 500 });
ScrollReveal().reveal('.cards', { delay: 500 });
ScrollReveal().reveal('.projects-title', { delay: 500 });
ScrollReveal().reveal('.card-project', { delay: 500 });
ScrollReveal().reveal('.footer', { delay: 500 });
