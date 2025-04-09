// Seleciona o elemento do ícone de hambúrguer
const menuToggle = document.querySelector(".menu-toggle");

// Seleciona o menu secundário
const secondaryMenu = document.querySelector(".menu-secundario");

// Adiciona um evento de clique ao ícone de hambúrguer para alternar a classe 'active' no menu secundário
menuToggle.addEventListener("click", () => {
    secondaryMenu.classList.toggle("active");
});
