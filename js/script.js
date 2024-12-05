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

ScrollReveal().reveal('.img-container', { delay: 1000 });
ScrollReveal().reveal('.text-container', { delay: 1000 });
ScrollReveal().reveal('.about-title', { delay: 1000 });
ScrollReveal().reveal('.about-text', { delay: 1000 });
ScrollReveal().reveal('.social-media', { delay: 1000 });
ScrollReveal().reveal('.about-img', { delay: 1000 });
ScrollReveal().reveal('.experience-title', { delay: 1000 });
ScrollReveal().reveal('.box', { delay: 1000 });
ScrollReveal().reveal('.techs-title', { delay: 1000 });
ScrollReveal().reveal('.cards', { delay: 1000 });
ScrollReveal().reveal('.projects-title', { delay: 1000 });
ScrollReveal().reveal('.card-project', { delay: 1000 });
ScrollReveal().reveal('.social-media', { delay: 1000 });
