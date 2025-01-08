// Código JavaScript para o menu sanduíche
const mobileMenuButton = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

// Alterna a classe 'active' no menu quando o botão é clicado
mobileMenuButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
