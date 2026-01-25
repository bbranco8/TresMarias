console.log("JS carregado");

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".mais").forEach(botao => {
        botao.addEventListener("click", () => {
            let artigo = botao.closest("article");
            let links = artigo.querySelector(".mulher_individual_text div");

            links.classList.toggle("mostrar");

            botao.textContent = links.classList.contains("mostrar")
                ? "Ver menos —"
                : "Ver mais +";
        });
    });
});
