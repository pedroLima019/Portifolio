document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const linksContainer = document.getElementById("links-container");

  hamburger.addEventListener("click", function () {
    linksContainer.classList.toggle("show");
  });
});
