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
