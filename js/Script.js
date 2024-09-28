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

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário
  
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  fetch('http://localhost:3000/send-email', { // A URL do seu servidor Node.js
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => response.text())
  .then(data => alert(data))
  .catch(error => alert('Erro: ' + error));
});


