document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const linksContainer = document.getElementById("links-container");
  const links = document.querySelectorAll("a");

  hamburger.addEventListener("click", function () {
    linksContainer.classList.toggle("show");
  });

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      linksContainer.classList.remove("show");
    });
  });
});
